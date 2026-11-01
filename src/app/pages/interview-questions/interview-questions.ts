import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { INTERVIEW_TOPICS, InterviewTopic, InterviewTopicId } from './interview-questions.data';

@Component({
  imports: [CommonModule],
  selector: 'app-interview-questions',
  styleUrl: './interview-questions.css',
  templateUrl: './interview-questions.html',
})
export class InterviewQuestions {

  readonly topics: InterviewTopic[] = INTERVIEW_TOPICS;
  selectedTopicId: InterviewTopicId = 'rest-api';
  private expandedAnswerKeys = new Set<string>();

  get selectedTopic(): InterviewTopic {
    return this.topics.find((topic) => topic.id === this.selectedTopicId) ?? this.topics[0];
  }

  get questionCount(): number {
    return this.getTopicQuestionCount(this.selectedTopic);
  }

  get hasAnswers(): boolean {
    return this.selectedTopic.sections.some((section) =>
      section.questions.some((question) => Boolean(question.answer))
    );
  }

  isAnswerExpanded(sectionIndex: number, questionNumber: number): boolean {
    return this.expandedAnswerKeys.has(this.getAnswerKey(sectionIndex, questionNumber));
  }

  answerId(sectionIndex: number, questionNumber: number): string {
    return `answer-${this.selectedTopicId}-${sectionIndex}-${questionNumber}`;
  }

  toggleAnswer(sectionIndex: number, questionNumber: number): void {
    const key = this.getAnswerKey(sectionIndex, questionNumber);
    const expandedKeys = new Set(this.expandedAnswerKeys);

    if (expandedKeys.has(key)) {
      expandedKeys.delete(key);
    } else {
      expandedKeys.add(key);
    }

    this.expandedAnswerKeys = expandedKeys;
  }

  getTopicQuestionCount(topic: InterviewTopic): number {
    return topic.sections.reduce((total, section) => total + section.questions.length, 0);
  }

  private getAnswerKey(sectionIndex: number, questionNumber: number): string {
    return `${this.selectedTopicId}:${sectionIndex}:${questionNumber}`;
  }

  selectTopic(topicId: InterviewTopicId): void {
    this.selectedTopicId = topicId;
  }


}
