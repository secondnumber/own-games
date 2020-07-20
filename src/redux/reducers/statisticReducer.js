const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';

let initialState = {
  totalItemsCount: 57,
  pageSize: 10,
  currentPage: 1,
  statisticList: [
    {
      id: 1,
      item: 'General',
      itemList: [
        { id: 101, item: 'Server Stats' },
        { id: 202, item: 'Onlline Players' },
      ],
    },
    { id: 2, item: 'Item Stats' },
    {
      id: 3,
      item: 'Rankings',
      itemList: [
        {
          id: 101,
          item: 'Lavel',
          itemListList: [
            { id: 1001, item: 'All Classes' },
            { id: 2002, item: 'Rogue' },
            { id: 3003, item: 'Warrior' },
          ],
        },
        { id: 202, item: 'Money' },
        { id: 303, item: 'Thiefs' },
        { id: 404, item: 'Fighters' },
      ],
    },
  ],
  statisticData: [
    {id: 1, name: 'Airi Satou', position: 'Accountant', age: 33, startDate: '2008/11/28'},
    {id: 2, name: 'Angelica Ramos', position: 'Chief Executive Officer (CEO)', age: 47, startDate: '2009/10/09'},
    {id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', age: 66, startDate: '2009/01/12'},
    {id: 4, name: 'Bradley Greer', position: 'Software Engineer', age: 41, startDate: '2012/10/13'},
    {id: 5, name: 'Brenden Wagner', position: 'Software Engineer', age: 28, startDate: '2011/06/07'},
    {id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', age: 61, startDate: '2012/12/02'},
    {id: 7, name: 'Bruno Nash', position: 'Software Engineer', age: 38, startDate: '2011/05/03'},
    {id: 8, name: 'Caesar Vance', position: 'Pre-Sales Support', age: 21, startDate: '2011/12/12'},
    {id: 9, name: 'Cara Stevens', position: 'Sales Assistant', age: 46, startDate: '2011/12/06'},
    {id: 10, name: 'Cedric Kelly', position: 'Senior Javascript Developer', age: 22, startDate: '2012/03/29'},
    {id: 11, name: 'Charde Marshall', position: 'Regional Director', age: 36, startDate: '2008/10/16'},
    {id: 12, name: 'Colleen Hurst', position: 'Javascript Developer', age: 39, startDate: '2009/09/15'},
    {id: 13, name: 'Dai Rios', position: 'Personnel Lead', age: 35, startDate: '2012/09/26'},
    {id: 14, name: 'Donna Snider', position: 'Customer Support', age: 27, startDate: '2011/01/25'},
    {id: 15, name: 'Doris Wilder', position: 'Sales Assistant', age: 23, startDate: '2010/09/20'},
    {id: 16, name: 'Finn Camacho', position: 'Support Engineer', age: 47, startDate: '2009/07/07'},
    {id: 17, name: 'Fiona Green', position: 'Chief Operating Officer (COO)', age: 48, startDate: '2010/03/11'},
    {id: 18, name: 'Garrett Winters', position: 'Accountant', age: 63, startDate: '2011/07/25'},
    {id: 19, name: 'Gavin Cortez', position: 'Team Leader', age: 22, startDate: '2008/10/26'},
    {id: 20, name: 'Gavin Joyce', position: 'Developer', age: 42, startDate: '2010/12/22'},
    {id: 21, name: 'Gloria Little', position: 'Systems Administrator', age: 59, startDate: '2009/04/10'},
    {id: 22, name: 'Haley Kennedy', position: 'Senior Marketing Designer', age: 43, startDate: '2012/12/18'},
    {id: 23, name: 'Hermione Butler', position: 'Regional Director', age: 47, startDate: '2011/03/21'},
    {id: 24, name: 'Herrod Chandler', position: 'Sales Assistant', age: 59, startDate: '2012/08/06'},
    {id: 25, name: 'Hope Fuentes', position: 'Secretary', age: 41, startDate: '2010/02/12'},
    {id: 26, name: 'Howard Hatfield', position: 'Office Manager', age: 51, startDate: '2008/12/16'},
    {id: 27, name: 'Jackson Bradshaw', position: 'Director', age: 65, startDate: '2008/09/26'},
    {id: 28, name: 'Jena Gaines', position: 'Office Manager', age: 30, startDate: '2008/12/19'},
    {id: 29, name: 'Jenette Caldwell', position: 'Development Lead', age: 30, startDate: '2011/09/03'},
    {id: 30, name: 'Jennifer Acosta', position: 'Junior Javascript Developer', age: 43, startDate: '2013/02/01'},
    {id: 31, name: 'Jennifer Chang', position: 'Regional Director', age: 28, startDate: '2010/11/14'},
    {id: 32, name: 'Jonas Alexander', position: 'Developer', age: 30, startDate: '2010/07/14'},
    {id: 33, name: 'Lael Greer', position: 'Systems Administrator', age: 21, startDate: '2009/02/27'},
    {id: 34, name: 'Martena Mccray', position: 'Post-Sales support', age: 46, startDate: '2011/03/09'},
    {id: 35, name: 'Michael Bruce', position: 'Javascript Developer', age: 29, startDate: '2011/06/27'},
    {id: 36, name: 'Michael Silva', position: 'Marketing Designer', age: 66, startDate: '2012/11/27'},
    {id: 37, name: 'Michelle House', position: 'Integration Specialist', age: 37, startDate: '2011/06/02'},
    {id: 38, name: 'Olivia Liang', position: 'Support Engineer', age: 64, startDate: '2011/02/03'},
    {id: 39, name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', age: 64, startDate: '2010/06/09'},
    {id: 40, name: 'Prescott Bartlett', position: 'Technical Author', age: 27, startDate: '2011/05/07'},
    {id: 41, name: 'Quinn Flynn', position: 'Support Lead', age: 22, startDate: '2013/03/03'},
    {id: 42, name: 'Rhona Davidson', position: 'Integration Specialist', age: 55, startDate: '2010/10/14'},
    {id: 43, name: 'Sakura Yamamoto', position: 'Support Engineer', age: 37, startDate: '2009/08/19'},
    {id: 44, name: 'Serge Baldwin', position: 'Data Coordinator', age: 64, startDate: '2012/04/09'},
    {id: 45, name: 'Shad Decker', position: 'Regional Director', age: 51, startDate: '2008/11/13'},
    {id: 46, name: 'Shou Itou', position: 'Regional Marketing', age: 20, startDate: '2011/08/14'},
    {id: 47, name: 'Sonya Frost', position: 'Software Engineer', age: 23, startDate: '2008/12/13'},
    {id: 48, name: 'Suki Burks', position: 'Developer', age: 53, startDate: '2009/10/22'},
    {id: 49, name: 'Tatyana Fitzpatrick', position: 'Regional Director', age: 19, startDate: '2010/03/17'},
    {id: 50, name: 'Thor Walton', position: 'Developer', age: 61, startDate: '2013/08/11'},
    {id: 51, name: 'Tiger Nixon', position: 'System Architect', age: 61, startDate: '2011/04/25'},
    {id: 52, name: 'Timothy Mooney', position: 'Office Manager', age: 37, startDate: '2008/12/11'},
    {id: 53, name: 'Unity Butler', position: 'Marketing Designer', age: 47, startDate: '2009/12/09'},
    {id: 54, name: 'Vivian Harrell', position: 'Financial Controller', age: 62, startDate: '2009/02/14'},
    {id: 55, name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', age: 40, startDate: '2009/06/25'},
    {id: 56, name: 'Zenaida Frank', position: 'Software Engineer', age: 63, startDate: '2010/01/04'},
    {id: 57, name: 'Zorita Serrano', position: 'Software Engineer', age: 56, startDate: '2012/06/01'},
  ],
};

const statisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.pageNumber,
      }
    }
    case SET_PAGE_SIZE: {
      debugger
      return {
        ...state,
        pageSize: action.pageSize,
      }
    }
  }
  return state;
};

export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  pageSize,
})

export default statisticReducer;
