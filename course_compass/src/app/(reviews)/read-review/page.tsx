'use client';

import React from 'react';
import {
  Slider,
  Card,
  CardHeader,
  CardFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { useCourse } from '../../context/CourseContext';
import { ArrowBackIcon } from '@/components/ui/icons';
import { useRouter } from 'next/navigation';

interface ReviewMetric {
  type: 'Comprehensiveness' | 'Fluency' | 'Pace' | string;
  value: number;
}

function ReviewMetricCard({ review }: { review: ReviewMetric }) {

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
        return `Students have found this instructor ${
          (mark?.label).toLowerCase() || 'unknown'
        } comprehensive.`;
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
        return `Students have found this instructor ${
          mark?.label.toLowerCase() || 'unknown'
        } fluent in the material taught in their courses.`;
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
        return `Students have found this instructor's pace ${
          mark?.label.toLowerCase() || 'unknown'
        }.`;
      },
    },
  };

  const currentType = type[review.type];

  return (
    <div>    
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-lg font-bold bg-gradient-to-r from-gradient-primary-l to-gradient-primary-r bg-clip-text text-transparent">
        {review.type}
      </h2>
      <Slider
        size="sm"
        minValue={1}
        maxValue={currentType.numberOfSteps}
        value={review.value}
        step={1}
        showSteps
        color="secondary"
        renderThumb={(props) => (
          <div {...props} className="group top-1/2 rounded-full">
            <span className="bg-gradient-to-r from-gradient-primary-l to-gradient-primary-r rounded-full w-4 h-4 block" />
          </div>
        )}
        classNames={{
          base: 'w-96 gap-3',
          step: 'w-2 h-2 data-[in-range=true]:bg-gradient-to-r from-gradient-primary-l to-gradient-primary-r',
          filler:
            'bg-gradient-to-r from-gradient-primary-l to-gradient-primary-r',
        }}
        marks={currentType.marks}
        disableThumbScale
        showOutline={false}
      />
      <p className="font-semibold">
        {currentType.getStatement(review.value)}
      </p>
    </div>
    </div>
  );
}

interface ReviewComment {
  content: string;
  author: string;
  courseTaken: string;
  termTaken: string;
}

function ReviewCommentCard({ comment }: { comment: ReviewComment }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      onPress={onOpen}
      isPressable
      className="w-60 h-60 border-2 justify-between font-semibold"
    >
      <CardHeader className="text-left">{comment.content}</CardHeader>
      <CardFooter className="justify-end">• {comment.author}</CardFooter>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader />
          <ModalBody className="justify-between gap-12">
            <p>{comment.content}</p>
            <div>
              <p>
                <span className="font-semibold">Course taken: </span>
                {comment.courseTaken}
              </p>
              <p>
                <span className="font-semibold">Term taken: </span>
                {comment.termTaken}
              </p>
            </div>
          </ModalBody>
          <ModalFooter>• {comment.author}</ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}

export default function Page() {
  const { selectedCourse } = useCourse();
  const router = useRouter();
  const navigateBack = () => {
    router.push('/reviewHistory');
  };

  if (!selectedCourse) {
    return <div>No course selected</div>;
  }

  return (
    <div className="flex flex-col items-center gap-12">
      <h1 className="text-3xl font-bold cursor-pointer" onClick={navigateBack}>
        <ArrowBackIcon />
      </h1>
      <div className="flex flex-col items-center pt-6">
        <h1 className="text-xl font-bold">{selectedCourse.instructor}</h1>
        <p className="text-gray-400">{`Courses taught: ${selectedCourse.code}`}</p>
      </div>
      <div id="review-metrics" className="flex flex-col gap-8">
        <ReviewMetricCard review={{ type: 'Comprehensiveness', value: 3 }} />
        <ReviewMetricCard review={{ type: 'Fluency', value: 4 }} />
        <ReviewMetricCard review={{ type: 'Pace', value: 3 }} />
      </div>
      <div
        id="review-comments"
        className="max-w-screen-lg grid grid-cols-3 gap-4"
      >
        <ReviewCommentCard
          comment={{
            content:
              'Highly recommend! Professor Sara Lee is very articulate and patient.',
            author: 'Anonymous',
            courseTaken: 'ABCXXX',
            termTaken: 'Fall 2023',
          }}
        />
        <ReviewCommentCard
          comment={{
            content: 'Do not recommend.',
            author: 'Anonymous',
            courseTaken: 'DEFXXX',
            termTaken: 'Summer 2024',
          }}
        />
        <ReviewCommentCard
          comment={{
            content:
              'Sara Lee is a great instructor. She is very knowledgeable and helpful.',
            author: 'Anonymous',
            courseTaken: 'GHIXXX',
            termTaken: 'Winter 2024',
          }}
        />
      </div>
    </div>
  );
}
