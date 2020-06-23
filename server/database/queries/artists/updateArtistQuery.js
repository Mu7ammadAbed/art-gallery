const connection = require('../../connection');

const updateArtistQuery = (data) => {
  const { mobileNo, customized, profileImg, socialMediaAccounts, bio } = data;
  return connection.query({
    text:
      'UPDATE artist SET mobile_no=$1, customized=$2, profile_img=$3, social_media_accounts=$4, bio=$5 WHERE id = $6',
    values: [mobileNo, customized, profileImg, socialMediaAccounts, bio],
  });
};

module.exports = updateArtistQuery;
