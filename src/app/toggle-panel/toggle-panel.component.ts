import { Component, EventEmitter, Inject, Output, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.scss']
})
export class TogglePanelComponent {
  @Output('change')
  readonly darkModeSwitched = new EventEmitter<boolean>();

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked)
  }

  theme: string = 'CORAAL_Sentiment_Analysis-light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    
  }

  ngOnInit() {
    this.darkModeSwitched.subscribe(checked => {     
      this.OnSwitch(checked ? 'CORAAL_Sentiment_Analysis-dark-theme' : 'CORAAL_Sentiment_Analysis-light-theme')
    });
  }

   get themeMode(): string {
     return this.theme;
   }

  OnSwitch(themeMode: string){
    this.theme = themeMode;
    this.renderer.setAttribute(this.document.body, 'class', themeMode);
    localStorage.setItem('activeTheme', themeMode);
  }
}
