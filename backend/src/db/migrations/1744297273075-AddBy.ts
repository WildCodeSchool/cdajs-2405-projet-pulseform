import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBy1744297273075 implements MigrationInterface {
    name = 'AddBy1744297273075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" RENAME COLUMN "deleted" TO "deleted_by"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" RENAME COLUMN "deleted_by" TO "deleted"`);
    }

}
