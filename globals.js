module.exports = {
    mainPageTitle: 'Hello, world!',
    myColor: '#42ff87',
    text: [
      {
        title: 'Array',
        text: "Массивы являются спископодобными объектами, чьи прототипы содержат методы для операций обхода и изменения массива. Ни размер JavaScript-массива, ни типы его элементов не являются фиксированными. Поскольку размер массива может увеличиваться и уменьшаться в любое время, то нет гарантии, что массив окажется плотным. То есть, при работе с массивом может возникнуть ситуация, что элемент массива, к которому вы обратитесь, будет пустым и вернёт undefined. В целом, это удобная характеристика; но если эта особенность массива не желательна в вашем специфическом случае, вы можете рассмотреть возможность использования типизированных массивов."
      },
      {
        title: 'Set',
        text: "Объекты Set представляют коллекции значений, по которым вы можете выполнить обход в порядке вставки элементов. Значение элемента в Set может присутствовать только в одном экземпляре, что обеспечивает его уникальность в коллекции Set."
      },
      {
        title: 'JSON',
        text: "JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения null. Он основывается на синтаксисе JavaScript, однако всё же отличается от него: не каждый код на JavaScript является JSON, и не каждый JSON является кодом на JavaScript."
      },
      {
        title: 'Object',
        text: "Все объекты в JavaScript являются потомками Object и наследуют методы и свойства из прототипа объекта Object.prototype, хотя они и могут быть переопределены. Например, прототипы других конструкторов переопределяют свойство constructor и предоставляют свои собственные методы toString(). Изменения в объекте прототипа Object распространяются на все объекты до тех пор, пока свойства и методы, учитывающие эти изменения, не переопределяются дальше по цепочке прототипов."
      },
    ]
  };

