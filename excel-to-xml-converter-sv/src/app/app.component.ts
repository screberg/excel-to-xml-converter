import { Component } from '@angular/core';
import { XlsxToJsonService } from './xlsx-to-json-service';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public result: any = [];
  public newJSON: any = [];
  public newData: any;
  public jsonData: any;
  public xmlData: any = '';
  private xlsxToJsonService: XlsxToJsonService = new XlsxToJsonService();
  constructor() {
  }
  handleFile(event) {
    let file = event.target.files[0];
    console.log(file);
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      console.log(data)
      let keys = Object.keys(data['sheets']);
      for (let key in data['sheets']) {
        this.result.push(data['sheets'][key])
      }
      this.newJSON = JSON.stringify(this.result[0]);
      console.log("HERE : ", this.result[0]);
      this.xmlData = '<FormDefinition>';
      for (let i = 0; i < this.result[0].length; i++) {
        let temp = [];
        this.xmlData = this.xmlData + '<FormElement>';
        let temp1 = [];
        for (let key in this.result[0][i]) {
          this.xmlData = this.xmlData + `<${key}>${this.result[0][i][key]}</${key}>`
        }
        this.xmlData = this.xmlData + '</FormElement>';
      }
      this.xmlData = this.xmlData + '</FormDefinition>';
      console.log("Parsed : ", $.parseXML(this.xmlData));
      this.newData = $.parseXML(this.xmlData);
    })
  }
}
