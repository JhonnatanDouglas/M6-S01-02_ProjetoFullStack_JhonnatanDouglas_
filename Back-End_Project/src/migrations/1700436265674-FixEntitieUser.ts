import { MigrationInterface, QueryRunner } from "typeorm";

export class FixEntitieUser1700436265674 implements MigrationInterface {
    name = 'FixEntitieUser1700436265674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "telephone" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telephone"`);
    }

}
