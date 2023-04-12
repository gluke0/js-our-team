const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

let members = document.querySelector('#members')

for (let i = 0; i < team.length; i++){
    let component = team[i];
    members.innerHTML += 
    `<div class="card">
        <img src="./assets/img/${team[i].image}" alt="">
        <div class="details">
            <h2>${team[i].name}</h2>
            <span>${team[i].role}</span>
        </div>
    </div>`;

    for (let key in component){
        console.log(key);
        console.log(component[key])
    }
}