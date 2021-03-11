import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  leadText = "Hello, What is This City Blogs"
  subTitle = "In this section, we will give you information about City Blogs."
  text = "A city is a large human settlement. It can be defined as a permanent and densely settled place with administratively defined boundaries whose members work primarily on non-agricultural tasks. Cities generally have extensive systems for housing, transportation, sanitation, utilities, land use, and communication. Their density facilitates interaction between people, government organisations and businesses, sometimes benefiting different parties in the process, such as improving efficiency of goods and service distribution. This concentration also can have significant negative consequences, such as forming urban heat islands, concentrating pollution, and stressing water supplies and other resources."
  ngOnInit(): void {
  }
  readMore() {
    this.text = "A city is a large human settlement. It can be defined as a permanent and densely settled place with administratively defined boundaries whose members work primarily on non-agricultural tasks. Cities generally have extensive systems for housing, transportation, sanitation, utilities, land use, and communication. Their density facilitates interaction between people, government organisations and businesses, sometimes benefiting different parties in the process, such as improving efficiency of goods and service distribution. This concentration also can have significant negative consequences, such as forming urban heat islands, concentrating pollution, and stressing water supplies and other resources. Historically, city-dwellers have been a small proportion of humanity overall, but following two centuries of unprecedented and rapid urbanization, more than half of the world population now lives in cities, which has had profound consequences for global sustainability. Present-day cities usually form the core of larger metropolitan areas and urban areas—creating numerous commuters traveling towards city centres for employment, entertainment, and edification. However, in a world of intensifying globalisation, all cities are to varying degrees also connected globally beyond these regions. This increased influence means that cities also have significant influences on global issues, such as sustainable development, global warming and global health. Because of these major influences on global issues, the international community has prioritized investment in sustainable cities through Sustainable Development Goal 11. Other important traits of cities besides population include the capital status and relative continued occupation of the city.For example, country capitals such as Abu Dhabi, Amsterdam, Athens, Beijing, Berlin, Brasília, Buenos Aires, Cairo, Canberra, Copenhagen, Helsinki, Lisbon, London, Madrid, Mexico City, Moscow, New Delhi, Ottawa, Paris, Rome, San José, Santiago, Seoul, Tokyo, Taipei, Ulaanbaatar, Warsaw, and Washington, D.C.reflect their nation's identity.[citation needed] Some historic capitals, such as Kyoto, maintain their reflection of cultural identity even without modern capital status. Religious holy sites offer another example of capital status within a religion, Jerusalem, Mecca, Varanasi, Ayodhya, Haridwar and Prayagraj each hold significance. The cities of Faiyum, Damascus, Delhi and Argos are among those laying claim to the longest continual inhabitation."
  }
}
