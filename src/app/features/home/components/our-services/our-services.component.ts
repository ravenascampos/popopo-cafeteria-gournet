import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  services: Array<Service> = [
    {
      image:
        'https://github.com/ravenascampos/popopo-images/blob/main/pets.png?raw=true',
      title: 'PET FRIENDLY',
      description:
        'Seu amigo pet é bem-vindo aqui! Temos um playground especial para que ele possa se divertir com outros amiguinhos, além dos mais variados petiscos.',
    },
    {
      image:
        'https://github.com/ravenascampos/popopo-images/blob/main/la_carrot.png?raw=true',
      title: 'GO VEGAN',
      description:
        'Veganes tem um espaço especial aqui. Quase todos os itens do nosso cardápio possuem opção vegana. Confira nosso cardápio ou consulte um de nossos atendentes.',
    },
    {
      image:
        'https://github.com/ravenascampos/popopo-images/blob/main/laptop_chromebook.png?raw=true',
      title: 'COFFE OFFICE',
      description:
        'Entendemos que o home office, ás vezes, pode ser solitário. Por isso, dispomos de espaço e internet de qualidade, para que você possa trabalhar enquanto desfruta de um bom café.',
    },
    {
      image:
        'https://github.com/ravenascampos/popopo-images/blob/main/emojione_flag-for-rainbow-flag.png?raw=true',
      title: 'DIVERSITY',
      description:
        'Todes são bem vindes aqui, desde que haja respeito. Tentamos fazer desse local um ambiente seguro e inclusivo para que pessoas diversas sintam-se acolhidas. JUntes somos mais fortes',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
