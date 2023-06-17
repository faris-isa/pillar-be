/*
 Navicat Premium Data Transfer

 Source Server         : postgre local
 Source Server Type    : PostgreSQL
 Source Server Version : 150001 (150001)
 Source Host           : localhost:5432
 Source Catalog        : pillar
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150001 (150001)
 File Encoding         : 65001

 Date: 17/06/2023 10:04:19
*/


-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS "public"."accounts";
CREATE TABLE "public"."accounts" (
  "id" uuid NOT NULL,
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "is_admin" bool,
  "created_at" timestamptz(6) NOT NULL,
  "updated_at" timestamptz(6) NOT NULL,
  "deleted_at" timestamptz(6)
)
;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO "public"."accounts" VALUES ('643a6ccd-f23f-48c6-9ddf-971fd3574ed6', 'chineseTiger', '0ec6b9cc16d9bb87188ef87a9c4f406e3426ab3b13a5656564c00bc5a726373e', 't', '2023-01-27 17:53:03+07', '2023-01-27 17:53:06+07', NULL);
INSERT INTO "public"."accounts" VALUES ('54eba57e-c435-4a00-bf99-1d72c575b5bb', 'franceMouse', '0ec6b9cc16d9bb87188ef87a9c4f406e3426ab3b13a5656564c00bc5a726373e', 'f', '2023-03-17 11:30:47.917+07', '2023-03-17 11:30:47.917+07', NULL);
INSERT INTO "public"."accounts" VALUES ('7b78adb0-68fa-4916-acce-cd5d2190bd0a', 'japaneseDeer', '0ec6b9cc16d9bb87188ef87a9c4f406e3426ab3b13a5656564c00bc5a726373e', 't', '2023-01-27 15:07:50+07', '2023-01-27 15:07:52+07', NULL);

-- ----------------------------
-- Table structure for inventory
-- ----------------------------
DROP TABLE IF EXISTS "public"."inventory";
CREATE TABLE "public"."inventory" (
  "kode_barang" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamptz(6) NOT NULL,
  "updated_at" timestamptz(6) NOT NULL,
  "deleted_at" timestamptz(6)
)
;

-- ----------------------------
-- Records of inventory
-- ----------------------------
INSERT INTO "public"."inventory" VALUES ('KD001', '2023-06-17 03:17:49+07', '2023-06-17 03:17:56+07', NULL);
INSERT INTO "public"."inventory" VALUES ('KD002', '2023-06-02 03:18:20+07', '2023-06-02 03:18:24+07', NULL);
INSERT INTO "public"."inventory" VALUES ('KD003', '2023-06-09 03:18:40+07', '2023-06-09 03:18:44+07', NULL);
INSERT INTO "public"."inventory" VALUES ('KD004', '2023-06-06 03:19:11+07', '2023-06-06 03:19:17+07', NULL);
INSERT INTO "public"."inventory" VALUES ('KD005', '2023-06-01 03:19:35+07', '2023-06-01 03:19:39+07', NULL);

-- ----------------------------
-- Table structure for inventory_details
-- ----------------------------
DROP TABLE IF EXISTS "public"."inventory_details";
CREATE TABLE "public"."inventory_details" (
  "id" uuid NOT NULL,
  "kode_barang" varchar(255) COLLATE "pg_catalog"."default",
  "serial_number" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamptz(6) NOT NULL,
  "updated_at" timestamptz(6) NOT NULL,
  "deleted_at" timestamptz(6),
  "out_date" timestamptz(6)
)
;

-- ----------------------------
-- Records of inventory_details
-- ----------------------------
INSERT INTO "public"."inventory_details" VALUES ('0f29276b-d2f3-48df-a948-8ef25866c949', 'KD001', '74WA3-X6E21-TJ2HQ-0NZQS-A20W9', '2023-06-05 04:15:26+07', '2023-06-05 04:15:32+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('530cfaef-bb1e-4ff9-be38-8a0eb82df9fd', 'KD001', 'D3Y3O-XW8AC-6OYTI-57L58-IP3D4', '2023-06-10 04:16:29+07', '2023-06-10 04:16:35+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('c05b2745-836f-4558-af78-c67b8b35386f', 'KD004', 'T96QR-ESV1U-GMMLP-59EZ8-8JMNI', '2023-06-13 04:17:40+07', '2023-06-13 04:17:44+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('3e32e7e3-45b6-4573-af31-27778121f5cb', 'KD005', 'ORTN4-FAZMO-2MPZ6-KULBU-A9SFS', '2023-06-17 06:19:15.49+07', '2023-06-17 06:19:15.49+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('fffaf137-93f0-480f-a5d2-6a427fb026ad', 'KD005', 'DS1SJ-2HG0N-ZPSAS-0W86M-1IDAI', '2023-06-17 06:19:15.465+07', '2023-06-17 08:47:40.435+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('092100fc-fec6-4883-8446-e68d21a80a75', 'KD003', 'IM05Y-KHHGJ-9EJUD-CNGIC-UEZYL', '2023-06-17 09:55:21.853+07', '2023-06-17 09:55:21.853+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('27d72ce7-fb98-400b-b2de-6418f1eee4e8', 'KD003', '92OUU-TXMHM-7GGRT-VQ7HC-1PQ5O', '2023-06-17 09:56:14.544+07', '2023-06-17 09:56:14.544+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('87f59e5c-d861-4319-bf42-228752106223', 'KD001', 'VDTSB-ZB14M-4C7KI-YDUPM-U6GVM', '2023-05-10 04:17:06+07', '2023-06-17 08:48:26.308+07', NULL, NULL);
INSERT INTO "public"."inventory_details" VALUES ('df50132a-248c-4b95-8ca1-e93ebb7d75f3', 'KD001', '7M2JN-KSU5J-KRYUF-P2GUQ-I4BBA', '2023-06-17 04:16:02+07', '2023-06-17 10:01:55.832+07', NULL, NULL);

-- ----------------------------
-- Uniques structure for table accounts
-- ----------------------------
ALTER TABLE "public"."accounts" ADD CONSTRAINT "accounts_username_key" UNIQUE ("username");

-- ----------------------------
-- Primary Key structure for table accounts
-- ----------------------------
ALTER TABLE "public"."accounts" ADD CONSTRAINT "accounts_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table inventory
-- ----------------------------
ALTER TABLE "public"."inventory" ADD CONSTRAINT "inventory_pkey" PRIMARY KEY ("kode_barang");

-- ----------------------------
-- Uniques structure for table inventory_details
-- ----------------------------
ALTER TABLE "public"."inventory_details" ADD CONSTRAINT "inventory_details_serial_number_key" UNIQUE ("serial_number");

-- ----------------------------
-- Primary Key structure for table inventory_details
-- ----------------------------
ALTER TABLE "public"."inventory_details" ADD CONSTRAINT "inventory_details_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table inventory_details
-- ----------------------------
ALTER TABLE "public"."inventory_details" ADD CONSTRAINT "inventory_details_kode_barang_fkey" FOREIGN KEY ("kode_barang") REFERENCES "public"."inventory" ("kode_barang") ON DELETE CASCADE ON UPDATE CASCADE;
