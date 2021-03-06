INSERT INTO artist
    (first_name,last_name,email,password,mobile_no,customized,
    reviews,social_media_accounts,budget,bio)
VALUES
    ('Alaa', 'Swaireh', 'alaa@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592888888', 'false', '10', '{https://www.facebook.com/}',
        '200.26', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('mariam', 'Isa', 'mariam@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592000000', 'true', '12', '{https://www.instagram.com/}',
        '300.50', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('Rana', 'Obeid', 'rana@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592111111', 'false', '7', '{https://www.pinterest.com/}',
        '300.66', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('Rehab', 'ALsawaf', 'rehab@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592333333', 'false', '8', '{https://www.facebook.com/}',
        '400.20', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('Mohammed', 'ALghzali', 'mohammed@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592777777', 'true', '3', '{https://www.facebook.com/}',
        '100.23', 'الفن هو الأسلوب، والأسلوب هو الإنسان');

INSERT INTO customer
    (first_name,last_name,email,password,budget)
VALUES
    ('Lina', 'Ebeid', 'lina@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 300.44),
    ('Muhammad', 'Abdulhadi', 'mu7ammadabed@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 1000.00),
    ('Ahmed', 'Safi', 'ahmed@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 200.31),
    ('Rawan', 'Abudahrouj', 'rwan@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 600.44),
    ('Abeer', 'Karam', 'abeer@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 250.00);

INSERT INTO painting
    (title,img,description,category,property,count_sold,artist_id)
VALUES
    ('طائر الاوز', 'k1xjo9t8d98hnqvjuryl.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'nature', '{"40*60":"20","120*160":"150", "200*140":"250"}', '1', '1'),
    ('تراث', 'mnzi8ebvwiamcn0iequp.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'hertage', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '1'),
    ('طبيعة ', 'etw0noytv7njmyqyzqso.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'nature', '{"40*60":"40","120*160":"150", "200*140":"250"}', '1', '2'),
    ('طبيعة ', 'bo9thuetiqbeeg5stupn.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'islamic', '{"40*60":"30","120*160":"150", "200*140":"250"}', '1', '2'),
    ('طبيعة ', 'jhuu1xrli5ksa60cdidz.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'nature', '{"40*60":"90","120*160":"150", "200*140":"250"}', '1', '3'),
    ('طبيعة ', 'd1j5kwm7isrhwlb6iids.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'nature', '{"40*60":"100","120*160":"150", "200*140":"250"}', '2', '3'),
    ('طبيعة ', 'miafsnxnynnowco8seem.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'nature', '{"40*60":"10","120*160":"150", "200*140":"250"}', '1', '4'),
    ('طبيعة ', 'ijblovh9mgmaev2ywzpk.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'nature', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '4'),
    ('طبيعة ', 'buyogjqipuwnqr6gxyz0.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'sky', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '4'),
    ('طبيعة ', 'zdecqqevfn2d64o4qkfx.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'nature', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '5');

INSERT INTO cart
    (customer_id,painting_id)
VALUES
    ('1', '1'),
    ('1', '2'),
    ('2', '3'),
    ('2', '4'),
    ('3', '5'),
    ('3', '6'),
    ('4', '7'),
    ('4', '8'),
    ('5', '9'),
    ('5', '10'),
    ('5', '6');

INSERT INTO painting_user
    (painting_id,customer_id,selling_date)
VALUES
    ('1', '1', '2020-6-18'),
    ('2', '1', '2020-6-18'),
    ('3', '2', '2020-6-10'),
    ('4', '2', '2020-6-10'),
    ('5', '3', '2020-6-01'),
    ('6', '3', '2020-6-01'),
    ('6', '5', '2020-6-01'),
    ('7', '4', '2020-6-02'),
    ('8', '4', '2020-6-02'),
    ('9', '5', '2020-6-03'),
    ('10', '5', '2020-6-03');

INSERT INTO feedback
    (artist_id,customer_id,rate,details)
VALUES
    ('1', '1', '5', 'عمل رائع جدا'),
    ('2', '2', '4', 'عمل رائع جدا'),
    ('3', '3', '5', 'عمل رائع جدا'),
    ('3', '5', '5', 'عمل رائع جدا'),
    ('4', '4', '5', 'عمل رائع جدا'),
    ('5', '5', '5', 'عمل رائع جدا');



