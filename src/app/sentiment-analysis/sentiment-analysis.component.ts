import { 
  Component, 
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input, } from '@angular/core';
import * as Sentiment from 'sentiment'; // using the AFINN-165 library
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SentimentAnalysisComponent {
  // @Input()
  // isDarkMode = false;

  // @Output()
  // readonly darkModeSwitched = new EventEmitter<boolean>();

  // onDarkModeSwitched({ checked }: MatSlideToggleChange) {
  //   this.darkModeSwitched.emit(checked);
  // }

  analysisResult: any;

  performAnalysis() {
    const sentiment = new Sentiment();
    const userInput = window.prompt('Enter some text:');
    if (userInput !== null) {
      this.analysisResult = sentiment.analyze(userInput);
    }
  }
}