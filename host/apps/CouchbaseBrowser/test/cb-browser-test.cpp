#include "DatabaseImpl.h"
#include "ConfigManager.h"

#include <QDir>
#include <QObject>
#include <QTemporaryDir>

#include <gtest/gtest.h>

#include <future>

#include <couchbaselitecpp/SGFleece.h>
#include <couchbaselitecpp/SGCouchBaseLite.h>

class DatabaseImplTest : public ::testing::Test
{
public:
    DatabaseImplTest()
    {
        QTemporaryDir dir;

        if(dir.isValid()) {
            DB_folder_path_ = dir.path();
        }
    }

    bool isJsonMsgSuccess(const QString &msg)
    {
        QJsonObject obj = QJsonDocument::fromJson(msg.toUtf8()).object();
        return obj.value("status").toString() == "success";
    }

    QString DB_folder_path_;

    const QString url_ = "ws://localhost:4984/db";

protected:
    void SetUp() override {}

    virtual void TearDown() override {}
};

TEST_F(DatabaseImplTest, CTOR)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    EXPECT_NE(db, nullptr);
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());

    delete db;
}

TEST_F(DatabaseImplTest, OPEN)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    // Should fail (empty file path)
    db->openDB("");
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());
    db->closeDB();
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());

    // Should fail (root dir)
    db->openDB("/");
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());

    // Should fail (not a DB file)
    db->openDB(DB_folder_path_);
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());
    EXPECT_FALSE(db->getListenStatus());
    db->closeDB();
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());
    EXPECT_FALSE(db->getListenStatus());
    db->closeDB();
    EXPECT_FALSE(db->isDBOpen());

    delete db;
}

TEST_F(DatabaseImplTest, CREATE)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    db->createNewDB("", "");
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());

    db->createNewDB(DB_folder_path_, " ");
    EXPECT_FALSE(db->getDBStatus());
    EXPECT_FALSE(db->isDBOpen());

    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    EXPECT_TRUE(db->getDBStatus());
    EXPECT_TRUE(db->isDBOpen());
    EXPECT_EQ(db->getDBName(), "DB_AutomatedTest");
    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    db->closeDB();
    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    DatabaseImpl *db2 = new DatabaseImpl(nullptr, false);

    EXPECT_EQ(db2->getDBName(), "");
    db2->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    EXPECT_FALSE(isJsonMsgSuccess(db2->getMessage()));
    db2->clearConfig();
    db2->closeDB();
    db2->createNewDB(QDir::separator(), "DB Name");
    EXPECT_FALSE(isJsonMsgSuccess(db2->getMessage()));

    db2->createNewDB(DB_folder_path_, "DB_AutomatedTest_2");

    delete db;
    delete db2;
}

TEST_F(DatabaseImplTest, CREATEDOC)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    db->createNewDoc("","");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));
    db->createNewDoc("doc","");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));
    db->createNewDoc("doc", "NOT A JSON");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{}");

    db->createNewDoc("doc", "{\"key\":\"value\"}");
    EXPECT_EQ(db->getDBName(), "DB_AutomatedTest");
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{\"doc\":{\"key\":\"value\"}}");
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));

    db->createNewDoc("doc", "{}");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    db->createNewDoc("doc", "");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    db->createNewDoc("doc2", "123");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    db->createNewDoc("doc2", "{\"array\":[\"a\",\"b\",\"c\"]}");
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));

    delete db;
}

TEST_F(DatabaseImplTest, EDITDOC)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    db->createNewDoc("doc", "{\"name\":\"name1\"}");
    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    db->createNewDoc("doc", "{\"name\":\"name1\"}");
    EXPECT_EQ(db->getDBName(), "DB_AutomatedTest");
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{\"doc\":{\"name\":\"name1\"}}");
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));

    db->editDoc("doc", "", "{\"name\":\"name1\"}");
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{\"doc\":{\"name\":\"name1\"}}");
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));

    db->editDoc("doc", "", "{\"name\":\"name2\"}");
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{\"doc\":{\"name\":\"name2\"}}");
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));

    db->editDoc("", "newId", "body");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    db->editDoc(" ", "newId", "body");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    db->editDoc("doc", "", "");
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{\"doc\":{\"name\":\"name2\"}}");

    db->editDoc("doc", "newDoc", "");
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{\"newDoc\":{\"name\":\"name2\"}}");

    db->deleteDoc("doc");
    db->deleteDoc("newDoc");
    db->editDoc("doc", "doc2", "body");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    delete db;
}

TEST_F(DatabaseImplTest, DELETEDOC)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");

    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{}");

    db->createNewDoc("doc", "{\"name\":\"name1\"}");
    db->deleteDoc("doc");
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{}");

    db->createNewDoc("doc", "{\"name\":\"name1\"}");
    db->editDoc("doc", "doc2", "");
    db->deleteDoc("doc");
    EXPECT_FALSE(isJsonMsgSuccess(db->getMessage()));

    db->deleteDoc("doc2");
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));
    EXPECT_EQ(db->getJsonDBContents().simplified().remove(' '), "{}");

    delete db;
}

TEST_F(DatabaseImplTest, SAVEAS)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    db->createNewDoc("doc", "{\"name\":\"name1\"}");
    db->saveAs(DB_folder_path_, "DB_AutomatedTest_Copy");

    delete db;

    DatabaseImpl *db2 = new DatabaseImpl(nullptr, false);
    EXPECT_NE(db2, nullptr);
    db2->openDB(DB_folder_path_ + QDir::separator() + "db" + QDir::separator() + "DB_AutomatedTest_Copy" +  QDir::separator() + "db.sqlite3");

    ASSERT_TRUE(db2->isDBOpen());
    EXPECT_TRUE(isJsonMsgSuccess(db2->getMessage()));
    EXPECT_EQ(db2->getJsonDBContents().simplified().remove(' '), "{\"doc\":{\"name\":\"name1\"}}");

    delete db2;
}

TEST_F(DatabaseImplTest, STARTLISTENING)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    EXPECT_TRUE(db->isDBOpen());

    std::future<bool> rep_starter = std::async(std::launch::async, [&db, this]() {return db->startListening(url_);});
    rep_starter.wait();
    std::this_thread::sleep_for(std::chrono::seconds(2));

    EXPECT_TRUE(db->isDBOpen());
    EXPECT_TRUE(db->getListenStatus());
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));

    // Compare replication results against results obtained directly from the CBLite API
    Spyglass::SGDatabase *db2 = new Spyglass::SGDatabase("DB_AutomatedTest_2", DB_folder_path_.toStdString());

    EXPECT_EQ(db2->open(), Spyglass::SGDatabaseReturnStatus::kNoError);
    EXPECT_TRUE(db2->isOpen());

    Spyglass::SGURLEndpoint url_endpoint(url_.toStdString());

    EXPECT_TRUE(url_endpoint.init());

    Spyglass::SGReplicatorConfiguration rep_config(db2, &url_endpoint);
    rep_config.setReplicatorType(Spyglass::SGReplicatorConfiguration::ReplicatorType::kPull);
    Spyglass::SGReplicator rep(&rep_config);

    EXPECT_EQ(rep.start(), Spyglass::SGReplicatorReturnStatus::kNoError);

    std::this_thread::sleep_for(std::chrono::seconds(2));
    std::vector<std::string> document_keys{};

    EXPECT_TRUE(db2->getAllDocumentsKey(document_keys));

    QString JSONResponse_;
    QJsonDocument document_json;
    QJsonObject total_json_message;

    for(const std::string &iter : document_keys) {
        Spyglass::SGDocument usbPDDocument(db2, iter);
        document_json = QJsonDocument::fromJson(QString::fromStdString(usbPDDocument.getBody()).toUtf8());
        total_json_message.insert(QString::fromStdString(iter), document_json.object());
    }

    JSONResponse_ = QJsonDocument(total_json_message).toJson();

    EXPECT_EQ(db->getJsonDBContents(), JSONResponse_);

    delete db;
    delete db2;
}

TEST_F(DatabaseImplTest, PUSHANDPULL)
{
    DatabaseImpl *db = new DatabaseImpl(nullptr, false);

    db->createNewDB(DB_folder_path_, "DB_AutomatedTest");
    EXPECT_TRUE(db->isDBOpen());

    // Add a document to this DB
    QString test_doc_id = "GTest_Testing_Doc";
    QString test_doc_key = "contents";
    QString test_doc_val = "This is the GTest Testing doc.";
    QString test_doc_body = "{\"" + test_doc_key + "\":\"" + test_doc_val + "\"}";

    db->createNewDoc(test_doc_id, test_doc_body);

    // With the first DB, start a pushing replicator
    std::future<bool> rep_starter = std::async(std::launch::async, [&db, this]() {return db->startListening(url_,"","","push");});
    rep_starter.wait();
    std::this_thread::sleep_for(std::chrono::seconds(2));

    EXPECT_TRUE(db->isDBOpen());
    EXPECT_TRUE(db->getListenStatus());
    EXPECT_TRUE(isJsonMsgSuccess(db->getMessage()));

    db->closeDB();
    EXPECT_FALSE(db->isDBOpen());

    delete db;

    DatabaseImpl *db2 = new DatabaseImpl(nullptr, false);

    db2->createNewDB(DB_folder_path_, "DB_AutomatedTest_2");
    EXPECT_TRUE(db2->isDBOpen());

    // With the second DB, start a pulling replicator
    std::future<bool> rep_starter2 = std::async(std::launch::async, [&db2, this]() {return db2->startListening(url_);});
    rep_starter2.wait();
    std::this_thread::sleep_for(std::chrono::seconds(2));

    EXPECT_TRUE(db2->isDBOpen());
    EXPECT_TRUE(db2->getListenStatus());
    EXPECT_TRUE(isJsonMsgSuccess(db2->getMessage()));

    // Get contents of DB in Json format
    QJsonObject obj = QJsonDocument::fromJson(db2->getJsonDBContents().toUtf8()).object();

    // Verify added document is in the second DB
    ASSERT_TRUE(obj.contains(test_doc_id));

    // Verify contents of document match
    QJsonObject obj2 = obj.value(test_doc_id).toObject();
    EXPECT_TRUE(obj.value(test_doc_id).toObject().contains(test_doc_key));
    EXPECT_EQ(obj2.value(test_doc_key).toString(), test_doc_val);

    delete db2;
}

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}