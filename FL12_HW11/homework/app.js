const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

for (let i = 0; i < structure.length; i++) {
  let a = structure[i];
  let ul = document.createElement('ul');
  rootNode.appendChild(ul);
  ul.className = 'open';
  let li1 = document.createElement('li');
  ul.appendChild(li1);
  li1.innerHTML = a.title;
  let b = a.children;
  if (a.hasOwnProperty('children')) {
    if (b !== null || false) {
      for (let j = 0; j < b.length; j++) {
        let c = b[j];
        let d = c.children;
        let ul1 = document.createElement('ul');
        li1.appendChild(ul1);
        let li2 = document.createElement('li');
        ul1.appendChild(li2);
        li2.innerHTML = c.title;
        if (c.hasOwnProperty('children')) {
          if (d !== null || false) {
            let ul2 = document.createElement('ul');
            li2.appendChild(ul2);
            for (let z = 0; z < d.length; z++) {
              let x = d[z];
              let li3 = document.createElement('li');
              ul2.appendChild(li3);
              li3.innerHTML = x.title;
              console.log(x)
              if (x.children === null || x.children === false) {
                let li33 = document.createElement('li');
                ul2.appendChild(li33);
                li33.innerHTML = 'empty folder';
                li33.className = 'empty_folder';
              }
            }
          }
          if (d === null || false) {
            let li3 = document.createElement('li');
            ul1.appendChild(li3);
            li3.innerHTML = 'empty folder';
            li3.className = 'empty_folder';
          }
        }
      }
    }
  }
}
