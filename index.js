const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render(){
    let p1 = React.createElement('p',{key:2},'Two grannies having the time of their life!');
    let p2 = React.createElement('p',{key:3},'Passengers:');
    let li1 = React.createElement('li',{key:5},'Agnes');
    let li2 = React.createElement('li',{key:6},'Muriel');
    let ul = React.createElement('ul',{key:4},[li1,li2]);
    return React.createElement('div',{className:'oldercoaster',key:1},[p1,p2,ul]);
  }
});

const InFrontOfYou = class InFrontOfYou extends React.Component {
  render(){
    let strong = React.createElement('strong',{key:5},'right in front of you.');
    let p2 = React.createElement('p',{key:4},['Sometimes, the solution is ',strong]);
    let p1 = React.createElement('p',{key:3},"You shouldn't look too far.");
    return React.createElement('div',{key:2},[p1,p2]);
  }
}

const ButcherShop = class ButcherShop extends React.Component {
  render(){
    let p = React.createElement('p',{key:2},'Hello! We have the following products for sale today:');
    let theKey = 3;
    let ulChildren = BUTCHER_PRODUCTS.map((prod) => {
      return React.createElement('li',{key: theKey++},`${prod}`)
    });
    let ul = React.createElement('ul',{key:7},ulChildren);
    return React.createElement('div',{className:'butcher-shop'},[p,ul])
  };
}


ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
