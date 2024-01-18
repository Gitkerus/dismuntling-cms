import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentBlocksTekstovyjBlokObUsluge extends Schema.Component {
  collectionName: 'components_content_blocks_tekstovyj_blok_ob_usluge';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0431\u043B\u043E\u043A \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0435';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A'>;
    Img: Attribute.Media;
    ImageLeftSided: Attribute.Boolean & Attribute.DefaultTo<false>;
    Text: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'\u0422\u0435\u043A\u0441\u0442 \u0431\u043B\u043E\u043A\u0430'>;
  };
}

export interface PagesStraniczaOtdelnojUslugi extends Schema.Component {
  collectionName: 'components_pages_stranicza_otdelnoj_uslugi';
  info: {
    displayName: '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0443\u0441\u043B\u0443\u0433\u0438';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A'>;
    Img: Attribute.Media;
    Category: Attribute.Enumeration<
      [
        '\u0421\u043D\u043E\u0441 \u0438 \u0434\u0435\u043C\u043E\u043D\u0442\u0430\u0436',
        '\u0417\u0435\u043C\u043B\u044F\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B',
        '\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435',
        '\u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438'
      ]
    > &
      Attribute.Required;
    Description: Attribute.RichText &
      Attribute.DefaultTo<'\u0422\u0435\u043A\u0441\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438, \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0441\u0442\u044B\u043C, \u0435\u0441\u043B\u0438 \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u043A\u0440\u0430\u0442\u043A\u043E\u0433\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043D\u0435\u0442'>;
    TextBlocks: Attribute.Component<
      'content-blocks.tekstovyj-blok-ob-usluge',
      true
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-blocks.tekstovyj-blok-ob-usluge': ContentBlocksTekstovyjBlokObUsluge;
      'pages.stranicza-otdelnoj-uslugi': PagesStraniczaOtdelnojUslugi;
    }
  }
}
