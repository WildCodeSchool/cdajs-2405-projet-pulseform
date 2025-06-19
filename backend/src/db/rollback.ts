import "reflect-metadata";
import AppDataSource from "../AppDataSource";

const rollback = async () => {
  try {
    await AppDataSource.initialize();
    console.log("📦 Data source initialized.");

    await AppDataSource.undoLastMigration();
    console.log("↩️ Last migration reverted.");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error during rollback:", error);
    process.exit(1);
  }
};

rollback();
