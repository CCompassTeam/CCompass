'use client';
import React from 'react';
import { Slider } from '@nextui-org/react';
import { useCourse } from '../../context/CourseContext';

export default function Page() {
  const { selectedCourse } = useCourse();

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center pt-6">
        <h1 className="text-xl font-bold">{selectedCourse.instructor}</h1>
        <p className="text-gray-400">{`Courses taught: ${selectedCourse.code}`}</p>
      </div>
      <div id="review-metrics" className="flex flex-col gap-8">
        <ReviewMetric review={{ type: 'Comprehensiveness', value: 3 }} />
        <ReviewMetric review={{ type: 'Fluency', value: 4 }} />
        <ReviewMetric review={{ type: 'Pace', value: 3 }} />
      </div>
    </div>
  );
}

interface Review {
  type: 'Comprehensiveness' | 'Fluency' | 'Pace' | string;
  value: number;
}

function ReviewMetric(this: any, { review }: { review: Review }) {
  const type: {
    [key: string]: {
      numberOfSteps: number;
      marks: { value: number; label: string }[];
      getStatement(reviewValue: number): string;
    };
  } = {
    Comprehensiveness: {
      numberOfSteps: 5,
      marks: [
        { value: 1, label: 'Not' },
        { value: 2, label: 'Somewhat' },
        { value: 3, label: 'Fairly' },
        { value: 4, label: 'Very' },
        { value: 5, label: 'Highly' },
      ],
      getStatement(reviewValue: number): string {
        const mark = this.marks[reviewValue - 1];
        return `Students have found this instructor ${(mark?.label).toLowerCase() || 'unknown'} comprehensive.`;
      },
    },
    Fluency: {
      numberOfSteps: 5,
      marks: [
        { value: 1, label: 'Not' },
        { value: 2, label: 'Somewhat' },
        { value: 3, label: 'Fairly' },
        { value: 4, label: 'Very' },
        { value: 5, label: 'Highly' },
      ],
      getStatement(reviewValue: number): string {
        const mark = this.marks[reviewValue - 1];
        return `Students have found this instructor ${mark?.label.toLowerCase() || 'unknown'} fluent in the material taught in their courses.`;
      },
    },
    Pace: {
      numberOfSteps: 3,
      marks: [
        { value: 1, label: 'Slow' },
        { value: 2, label: 'Just Right' },
        { value: 3, label: 'Fast' },
      ],
      getStatement(reviewValue: number): string {
        const mark = this.marks[reviewValue - 1];
        return `Students have found this instructor's pace ${mark?.label.toLowerCase() || 'unknown'}.`;
      },
    },
  };

  const currentType = type[review.type];

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-lg font-bold bg-gradient-to-r from-gradient-button-l to-gradient-button-r bg-clip-text text-transparent">
        {review.type}
      </h2>
      <Slider
        size="sm"
        minValue={1}
        maxValue={currentType.numberOfSteps}
        value={review.value}
        step={1}
        showSteps={true}
        color="secondary"
        renderThumb={(props) => (
          <div {...props} className="group top-1/2 rounded-full">
            <span className="bg-gradient-to-r from-gradient-button-l to-gradient-button-r rounded-full w-4 h-4 block" />
          </div>
        )}
        classNames={{
          base: 'w-96 gap-3',
          step: 'w-2 h-2 data-[in-range=true]:bg-gradient-to-r from-gradient-button-l to-gradient-button-r',
          filler:
            'bg-gradient-to-r from-gradient-button-l to-gradient-button-r',
        }}
        marks={currentType.marks}
        disableThumbScale={true}
        showOutline={false}
      />
      <p className="font-semibold">{currentType.getStatement(review.value)}</p>
    </div>
  );
}
