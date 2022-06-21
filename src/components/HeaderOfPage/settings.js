export const menuItems = {
  menuItem1: {
    id: "new-in",
    title: "Новинки",
  },

  menuItem2: {
    id: "clothes",
    title: "Одяг",
    submenu: {
      imageSection: {
        imgSrc: require("@/assets/images/sub-menu-img/clothes-img.jpeg"),
      },
      columnsMenusSection: [
        {
          id: "1",
          title: "column1 ",
          listItems: [
            {
              title: "Штани",
              routeId: "Pants-id",
            },
            {
              title: "Футболки & Жилети",
              routeId: "T-shirts&West-id",
            },
            {
              title: "Уніформа",
              routeId: "http////",
            },
            {
              title: "Фліс",
              routeId: "http////",
            },
            {
              title: "Рукавиці",
              routeId: "http////",
            },
            {
              title: "Сорочки",
              routeId: "http////",
            },
          ],
        },
        {
          id: "2",
          title: "column2",
          listItems: [
            {
              title: "Куртки",
              routeId: "http////",
            },
            {
              title: "Ватерпруф",
              routeId: "http////",
            },
            {
              title: "Комбенезони",
              routeId: "http////",
            },
            {
              title: "Ремені",
              routeId: "http////",
            },
            {
              title: "Шарфи",
              routeId: "http////",
            },
          ],
        },
      ],
    },
  },

  menuItem3: {
    id: "boots",
    title: "Взуття",
    submenu: {
      imageSection: {
        imgSrc: require("@/assets/images/sub-menu-img/boots-img.jpeg"),
      },
      columnsMenusSection: [
        {
          id: "1",
          title: "column1 ",
          listItems: [
            {
              title: "Літні черевики",
              routeId: "http////",
            },
            {
              title: "Демісезонні черевики",
              routeId: "http////",
            },
            {
              title: "Зимові черевики",
              routeId: "http////",
            },
            {
              title: "Напів-черевики",
              routeId: "http////",
            },
            {
              title: "Кеди",
              routeId: "http////",
            },
          ],
        },
        {
          id: "2",
          title: "column2",
          listItems: [
            {
              title: "Бахіли",
              routeId: "http////",
            },
            {
              title: "Гамаші",
              routeId: "http////",
            },
            {
              title: "Гетри",
              routeId: "http////",
            },
            {
              title: "Шкарпетки",
              routeId: "http////",
            },
            {
              title: "Аксесуари",
              routeId: "http////",
            },
          ],
        },
      ],
    },
  },

  menuItem4: {
    id: "equipment",
    title: "Спорядження",
    submenu: {
      imageSection: {
        imgSrc: require("@/assets/images/sub-menu-img/equipment-img.jpeg"),
      },
      columnsMenusSection: [
        {
          id: "1",
          title: "column1 ",
          listItems: [
            {
              title: "Магазинні підсумки",
              routeId: "http////",
            },
            {
              title: "Утилітарні підсумки",
              routeId: "http////",
            },
            {
              title: "Підсумки під аптечку",
              routeId: "http////",
            },
            {
              title: "Гранатні підсумки",
              routeId: "http////",
            },
            {
              title: "Підсумки під рацію",
              routeId: "http////",
            },
          ],
        },
        {
          id: "2",
          title: "column2",
          listItems: [
            {
              title: "Бронежилети",
              routeId: "http////",
            },
            {
              title: "Чест-ріги ",
              routeId: "http////",
            },
            {
              title: "Ремінно-плечеві системи",
              routeId: "http////",
            },
            {
              title: "Жилети",
              routeId: "http////",
            },
            {
              title: "Гідратори",
              routeId: "http////",
            },
          ],
        },
      ],
    },
  },

  menuItem5: {
    id: "bags-backpacks",
    title: "Рюкзаки & Cумки",
    submenu: {
      imageSection: {
        imgSrc: require("@/assets/images/sub-menu-img/bags-img.jpeg"),
      },
      columnsMenusSection: [
        {
          id: "1",
          title: "column1 ",
          listItems: [
            {
              title: "Рейдові та патрульні рюкзаки",
              linkSrc: "http////",
            },
            {
              title: "Сумки через плече",
              routeId: "http////",
            },
            {
              title: "Баули, транспортні сумки",
              routeId: "http////",
            },
            {
              title: " Чохли водонепроникні",
              routeId: "http////",
            },
            {
              title: "Чохли для рюкзаків",
              routeId: "http////",
            },
          ],
        },
      ],
    },
  },

  menuItem6: {
    id: "glasses",
    title: "Окуляри",
    submenu: {
      imageSection: {
        imgSrc: require("@/assets/images/sub-menu-img/eye-glasses-img.jpeg"),
      },
      columnsMenusSection: [
        {
          id: "1",
          title: "column1 ",
          listItems: [
            {
              title: "Захисні окуляри",
              routeId: "http////",
            },
            {
              title: "Оруляри маски",
              routeId: "http////",
            },
            {
              title: "Аксесуари",
              routeId: "http////",
            },
            {
              title: "Діоптричні вставки",
              routeId: "http////",
            },
            {
              title: "Чохли для окулярів",
              routeId: "http////",
            },
          ],
        },
      ],
    },
  },
  menuItem7: {
    id: "sale",
    title: "Розпродажа",
  },
};
