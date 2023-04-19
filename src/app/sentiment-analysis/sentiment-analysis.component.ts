import { Component } from '@angular/core';
import * as Sentiment from 'sentiment'; // using the AFINN-165 library

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})

export class SentimentAnalysisComponent {
  analysisResult: any;

  performAnalysis() {
    const sentiment = new Sentiment();
    const userInput = window.prompt('Enter some text:');
    if (userInput !== null) {
      this.analysisResult = sentiment.analyze(userInput);
    }
  }
}