import { Injectable } from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { pluck, sampleTime, delay } from 'rxjs/operators'
@Injectable()

export class ServiceCountry{
  public urlAllCountries: string = 'https://restcountries.eu/rest/v2/all'



  public changeTextNamePage(name:string){
    document.getElementById('idTheme').innerText=name
  }
  public search(name:string=''){
    // filter
    name = name.substring(0,1).toUpperCase()+name.substring(1,name.length).toLowerCase()

    return ajax.get(`https://restcountries.eu/rest/v2/name/${name}`).pipe(
      pluck('response'),
      delay(800)
    )

  }
  public getAllCountry(){

    return ajax.get(this.urlAllCountries).pipe(
      delay(1000),
      pluck('response')
    )

  }




}
