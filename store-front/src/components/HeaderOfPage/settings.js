export const menuItems = {
  menuItem1: {
    id: "new-in",
    title: "Новинки",
    submenu: {
      id: 1,
    },
  },

  menuItem2: {
    id: "clothes",
    title: "Одяг",
    submenu: {
      id: 2,
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
              routeSubCategory: "pants",
            },
            {
              title: "Футболки & Жилети",
              routeSubCategory: "t_shirts_West",
            },
            {
              title: "Уніформа",
              routeSubCategory: "uniform",
            },
            {
              title: "Фліс",
              routeSubCategory: "fleece",
            },
            {
              title: "Рукавиці",
              routeSubCategory: "gloves",
            },
            {
              title: "Сорочки",
              routeSubCategory: "shirts",
            },
          ],
        },
        {
          id: "2",
          title: "column2",
          listItems: [
            {
              title: "Куртки",
              routeSubCategory: "jackets",
            },
            {
              title: "Ватерпруф",
              routeSubCategory: "water_proof",
            },
            {
              title: "Комбенезони",
              routeSubCategory: "overalls",
            },
            {
              title: "Ремені",
              routeSubCategory: "belts",
            },
            {
              title: "Шарфи",
              routeSubCategory: "scarves",
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
      id: 3,
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
              routeSubCategory: "summer_boots",
            },
            {
              title: "Демісезонні черевики",
              routeSubCategory: "demi_season_boots",
            },
            {
              title: "Зимові черевики",
              routeSubCategory: "winter_boots",
            },
            {
              title: "Напів-черевики",
              routeSubCategory: "semi_boots",
            },
            {
              title: "Кеди",
              routeSubCategory: "sneakers",
            },
          ],
        },
        {
          id: "2",
          title: "column2",
          listItems: [
            {
              title: "Бахіли",
              routeSubCategory: "shoe_covers",
            },
            {
              title: "Гамаші",
              routeSubCategory: "gamashi",
            },
            {
              title: "Гетри",
              routeSubCategory: "gaiters",
            },
            {
              title: "Шкарпетки",
              routeSubCategory: "socks",
            },
            {
              title: "Аксесуари",
              routeSubCategory: "boots_accessories",
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
      id: 4,

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
              routeSubCategory: "magazine_pouches",
            },
            {
              title: "Утилітарні підсумки",
              routeSubCategory: "utility_pouches",
            },
            {
              title: "Підсумки під аптечку",
              routeSubCategory: "medical_pouches",
            },
            {
              title: "Гранатні підсумки",
              routeSubCategory: "grenade_pouches",
            },
            {
              title: "Підсумки під рацію",
              routeSubCategory: "radio_pouches",
            },
          ],
        },
        {
          id: "2",
          title: "column2",
          listItems: [
            {
              title: "Бронежилети",
              routeSubCategory: "body_armors",
            },
            {
              title: "Чест-ріги ",
              routeSubCategory: "chest_rigs",
            },
            {
              title: "Ремінно-плечеві системи",
              routeSubCategory: "Belt_and_shoulder_systems",
            },
            {
              title: "Жилети",
              routeSubCategory: "wests",
            },
            {
              title: "Гідратори",
              routeSubCategory: "hydrators",
            },
          ],
        },
      ],
    },
  },

  menuItem5: {
    id: "bags_and_backpacks",
    title: "Рюкзаки & Cумки",
    submenu: {
      id: 5,

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
              routeSubCategory: "raid_back_pacs",
            },
            {
              title: "Сумки через плече",
              routeSubCategory: "bags",
            },
            {
              title: "Баули, транспортні сумки",
              routeSubCategory: "transports_bag",
            },
            {
              title: " Чохли водонепроникні",
              routeSubCategory: "waterproof_covers",
            },
            {
              title: "Чохли для рюкзаків",
              routeSubCategory: "bag-pack_covers",
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
      id: 6,

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
              routeSubCategory: "protect_eye_glasses",
            },
            {
              title: "Оруляри маски",
              routeSubCategory: "eye_masks",
            },
            {
              title: "Аксесуари",
              routeSubCategory: "glasses_accessories",
            },
            {
              title: "Діоптричні вставки",
              routeSubCategory: "dioptric_insert",
            },
            {
              title: "Чохли для окулярів",
              routeSubCategory: "glasses_cover",
            },
          ],
        },
      ],
    },
  },
  menuItem7: {
    id: "sale",
    title: "Розпродажа",
    submenu: {
      id: 7,
    },
  },
};
