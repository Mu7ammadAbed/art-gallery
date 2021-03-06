import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Radio, Select, AutoComplete, message } from 'antd';
import PaintingSection from './PaintingsSection';
import './style.css';

const categories = [
  { name: ['heritage', 'تراث'] },
  { name: ['sky', 'سماء'] },
  { name: ['nature', 'طبيعة'] },
  { name: ['islamic', 'فن إسلامي'] },
  { name: ['all', 'الكل'] },
  { name: ['other', 'غير ذلك'] },
];

function PaintingContainer() {
  const [paintings, setPaintings] = useState();
  const [artists, setArtists] = useState();
  const [advance, setAdvance] = useState('mostPopular');
  const [price, setPrice] = useState();
  const [artist, setArtist] = useState(-1);
  const [category, setCategory] = useState('all');

  const getPaintings = async (cat) => {
    try {
      const {
        data: { data },
      } = await axios.get(`/api/v1/paintings/${cat || 'all'}`);
      setPaintings(data);
    } catch (err) {
      message.error('عذراً, لا يمكن تحميل اللوحات');
    }
  };

  const getArtists = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/artists');
      const artistsArray = data.map(
        ({ first_name: fName, last_name: lName, id }) => ({
          value: `${fName} ${lName}`,
          id,
        })
      );

      setArtists(artistsArray);
    } catch (err) {
      message.error('عذراً, لا يمكن عرض الفنانين ');
    }
  };

  useEffect(() => {
    getPaintings();
    getArtists();
  }, []);

  const deletePainting = async (paintingID) => {
    try {
      const { data } = await axios.delete(`/api/v1/paintings/${paintingID}`);
      if (data.statusCode === 200) {
        message.success('تم حذف اللوحة بنجاح');
        setPaintings(paintings.filter((e) => e.id !== paintingID));
      }
    } catch (err) {
      message.error('لا يمكن حذف اللوحة');
    }
  };

  if (!paintings?.length || !artists?.length) return 'loading';

  const artistID = artists.find((e) => e.value === artist)?.id;

  const sortedPaintings =
    advance === 'mostPopular'
      ? [...paintings].sort((a, b) => b.count_sold - a.count_sold)
      : paintings;

  const minPriceOfPainting = (property) =>
    Object.values(property).reduce((min, e) => (min > +e ? +e : min), 9999999);

  const propertyFilter = ({ property, ...rest }) => ({
    ...rest,
    property,
    minPrice: minPriceOfPainting(property),
  });

  const minPriceFilter = ({ minPrice }) => !price || minPrice <= price;

  const categoryFilter = ({ category: paintCategory }) => {
    if (category === 'all') return true;
    return paintCategory === category;
  };

  const artistNameFilter = ({ artist_id: paintArtistId }) => {
    if (artistID) return paintArtistId === artistID;
    return true;
  };

  const finalData = sortedPaintings
    .map(propertyFilter)
    .filter(minPriceFilter)
    .filter(categoryFilter)
    .filter(artistNameFilter);

  return (
    <>
      <div className="main__landing__container">
        <div className="landing__container">
          <div className="container__filter">
            <div className="filter_container_wrap">
              <Select
                placeholder="بحث متقدم"
                style={{ width: 150, marginLeft: 10 }}
                onChange={(value) => {
                  if (value !== 'price') setPrice(999);
                  setAdvance(value);
                }}
              >
                <Select.Option value="mostPopular">الأكثر مبيعاً</Select.Option>
                <Select.Option value="price">السعر</Select.Option>
              </Select>
              <AutoComplete
                style={{
                  width: 200,
                }}
                options={artists}
                onChange={(value) => setArtist(value)}
                placeholder="ابحث باسم الفنان"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                allowClear
              />
            </div>
            {advance === 'price' && (
              <div>
                <span>بحث حسب السعر</span>
                <Form.Item label="أقل من" name="price">
                  <Input
                    type="number"
                    style={{ width: 120 }}
                    onChange={(e) => setPrice(+e.target.value)}
                  />
                </Form.Item>
              </div>
            )}
            <br />
            <div className="catInputs">
              <Radio.Group
                className="search__category"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue="all"
                buttonStyle="solid"
              >
                {categories.map((e) => (
                  <Radio.Button
                    key={e.name[0]}
                    style={{
                      width: 120,
                      textAlign: 'center',
                      marginRight: '5px',
                    }}
                    value={e.name[0]}
                  >
                    {e.name[1]}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>
          </div>
          <PaintingSection
            id="painting__link"
            paintings={finalData}
            deletePainting={deletePainting}
          />
        </div>
      </div>
    </>
  );
}

export default PaintingContainer;
