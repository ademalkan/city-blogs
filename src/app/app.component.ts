import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'city-blog';
  cityItems: any[] = [
    {
      cityName: 'İstanbul', cityTitle : '' , cityImage: 'https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', cityInfo: 'Eski Dünyanın merkezinde yer alan İstanbul, tarihi abideleri ve şahane tabii manzaraları ile çok önemli bir megapoldür. Asya ile Avrupa Kıtalarının dar bir deniz geçidi ile ayrıldığı yerde, iki kıta üzerinde kurulu ve dünya üzerinde içinden deniz geçen tek şehirdir. 2500 yılı aşan bir tarihe sahip olan İstanbul, deniz ve karaların kucaklaştığı bu stratejik bölgede kuruluşunu takiben önemli bir ticaret merkezi olmuştu. Tarihi İstanbul şehri üç tarafını Marmara Denizi, Boğaziçi ve Haliç’in sardığı bir yarım ada üzerinde yer alır. İstanbul, üç imparatorluğa başkentlik yapma özelliğinin yanı sıra, her dönem ekonomik merkez olma özelliğini de koruyan az sayıda şehirden biri.Şehir, 1923’te kurulan yeni cumhuriyete siyasi anlamda başkent olmamasına rağmen, ekonomik merkez olma özelliğini her zaman sürdürmüş ve ülkenin kaderini belirleyen konumunu asla kaybetmemiştir.İstanbul hem iç hem de dış ticarette merkezi bir öneme sahip.Kentin ekonomisine ve iş yaşamına kısaca bakacak olursak, bugün İstanbul’un Türkiye GSMH’sindeki payı yaklaşık yüzde 23 düzeyinde. Şehirde son yıllarda sanayinin yerini yönetim merkezleri ile finans, turizm, hizmet ve bankacılık gibi sektörler aldı.Sanayideki bu duruma karşılık para piyasalarının kalbi artan bir tempoyla hep İstanbul’da atıyor.Coğrafi konumu itibariyle İstanbul’da günün ilk 4 mesai saati Asya ülkeleriyle, diğer 4 saati Avrupa ülkeleriyle çakışıyor.Bu da İstanbul’a doğal bir finansal merkez olma konumu getiriyor. İstanbul, ülke hava taşımacılığının da merkezi durumundadır.Atatürk Havalimanı’nın yanı sıra Anadolu yakasında da Pendik Sabiha Gökçen Havaalanı da İstanbul’a hizmet veriyor.Türkiye’de sayıları 153 olan müzelerin 14’ü İstanbul’da ve bu müzelerde bulunan 2 milyon 400 bin mevcut eserin yüzde 34’ü İstanbul müzelerinde sergileniyor.'},
  ]
}
