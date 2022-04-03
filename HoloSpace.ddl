-- *********************************************
-- * Standard SQL generation                   
-- *--------------------------------------------
-- * DB-MAIN version: 11.0.2              
-- * Generator date: Sep 20 2021              
-- * Generation date: Sun Apr  3 21:18:32 2022 
-- * LUN file: /home/ryu/Documents/Code/holospace/HoloSpace.lun 
-- * Schema: HOLOSPACE/SQL 
-- ********************************************* 


-- Database Section
-- ________________ 

create database HOLOSPACE;


-- DBSpace Section
-- _______________


-- Tables Section
-- _____________ 

create table MEMBERS (
     CHANNEL_URL char(57) not null,
     DESCRIPTION char(512) not null,
     IMAGE_URL char(77) not null,
     ID char(19) not null,
     USERNAME char(20) not null,
     DISPLAY_NAME char(128) not null,
     constraint ID_MEMBERS_ID primary key (ID));

comment on column MEMBERS.IMAGE_URL is 'From twitter';
comment on column MEMBERS.ID is 'Rest ID for twitter ';
comment on column MEMBERS.USERNAME is '@<screen_name>';

create table SPACE (
     TITLE char(70) not null,
     STATE char(7) not null,
     SCHEDULED_AT date,
     CREATED_AT date not null,
     STARTED_AT date,
     ID char(14) not null,
     Cre_ID char(19) not null,
     constraint ID_SPACE_ID primary key (ID));

comment on column SPACE.Cre_ID is 'Rest ID for twitter ';


-- Constraints Section
-- ___________________ 

alter table SPACE add constraint EXTONE_SPACE
     check((SCHEDULED_AT is not null and STARTED_AT is null)
           or (SCHEDULED_AT is null and STARTED_AT is not null)); 

alter table SPACE add constraint FKcreates_FK
     foreign key (Cre_ID)
     references MEMBERS;


-- Index Section
-- _____________ 

create unique index ID_MEMBERS_IND
     on MEMBERS (ID);

create unique index ID_SPACE_IND
     on SPACE (ID);

create index FKcreates_IND
     on SPACE (Cre_ID);

