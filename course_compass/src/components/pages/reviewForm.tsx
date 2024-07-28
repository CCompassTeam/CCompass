// src/app/reviewForm/page.tsx
'use client';

import { useState } from 'react';
import { useCourse } from '../../app/context/CourseContext';
import { Slider, Button, Textarea, Radio, RadioGroup, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ArrowBackIcon } from '../ui/icons';

export default function ReviewForm() {
  const { selectedCourse } = useCourse();
  const router = useRouter();
  const [professorComprehensive, setProfessorComprehensive] = useState<number>(3);
  const [professorFluency, setProfessorFluency] = useState<number>(3);
  const [professorPace, setProfessorPace] = useState<number>(2);
  const [courseDifficulty, setCourseDifficulty] = useState<number>(3);
  const [courseLoad, setCourseLoad] = useState<number>(3);
  const [coursePace, setCoursePace] = useState<number>(2);
  const [takeAgain, setTakeAgain] = useState<string>('Yes');
  const [courseReview, setCourseReview] = useState<string>('');
  const [instructorReview, setInstructorReview] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (value: number | number[]) => {
    if (typeof value === 'number') {
      setter(value);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const navigateBack = () => {
    router.push('/reviewHistory');
  };

  const handleDeleteReview = () => {
    setIsSubmitted(false);
    setProfessorComprehensive(3);
    setProfessorFluency(3);
    setProfessorPace(2);
    setCourseDifficulty(3);
    setCourseLoad(3);
    setCoursePace(2);
    setTakeAgain('Yes');
    setCourseReview('');
    setInstructorReview('');
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (!selectedCourse) {
    return <p>No course selected</p>;
  }

  return (
    <div className="p-6 gap-[3rem] flex flex-row ml-6">
      <h1 className="text-3xl font-bold cursor-pointer" onClick={navigateBack}>
        <ArrowBackIcon />
      </h1>
      <div className="text-xl flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">
          {selectedCourse.code} - {selectedCourse.instructor}
        </h1>
        {isSubmitted ? (
          <div className="w-full max-w-4xl">
            <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">Review Submitted</h2>
            <div className="flex flex-col gap-2">
              <p>
                <strong>Professor Comprehensive:</strong> {professorComprehensive}
              </p>
              <p>
                <strong>Professor Fluency:</strong> {professorFluency}
              </p>
              <p>
                <strong>Professor Pace:</strong> {professorPace}
              </p>
              <p>
                <strong>Course Difficulty:</strong> {courseDifficulty}
              </p>
              <p>
                <strong>Course Load:</strong> {courseLoad}
              </p>
              <p>
                <strong>Course Pace:</strong> {coursePace}
              </p>
              <p>
                <strong>Would take again:</strong> {takeAgain}
              </p>
              <p>
                <strong>Course Review:</strong> {courseReview}
              </p>
              <p>
                <strong>Instructor Review:</strong> {instructorReview}
              </p>
              <Button className="bg-red-500 font-bold text-white px-8 py-3 mt-4" onClick={onOpen}>
                Delete Review
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Delete a review?</ModalHeader>
                      <ModalBody>
                        <p>Once you delete your review you will not be able to leave another review for this course.</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Cancel
                        </Button>
                        <Button className="flex items-center bg-red-500 text-white px-8 py-3" onClick={() => { handleDeleteReview(); onClose(); }}>
                          Delete
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl flex flex-col gap-[2rem]">
            <section>
              <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">Professor</h2>
              <div className="flex flex-col gap-[2rem] ml-[2rem]">
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="professorComprehensive">How comprehensive is the professor?</label>
                  <Slider
                    id="professorComprehensive"
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps
                    color="secondary"
                    value={professorComprehensive}
                    onChange={handleSliderChange(setProfessorComprehensive)}
                    marks={[
                      { value: 1, label: 'Not' },
                      { value: 2, label: 'Somewhat' },
                      { value: 3, label: 'Fairly' },
                      { value: 4, label: 'Very' },
                      { value: 5, label: 'Highly' },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="professorFluency">How fluent is the professor?</label>
                  <Slider
                    id="professorFluency"
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps
                    color="secondary"
                    value={professorFluency}
                    onChange={handleSliderChange(setProfessorFluency)}
                    marks={[
                      { value: 1, label: 'Not' },
                      { value: 2, label: 'Somewhat' },
                      { value: 3, label: 'Fairly' },
                      { value: 4, label: 'Very' },
                      { value: 5, label: 'Highly' },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="professorPace">How is the pace of the professor?</label>
                  <Slider
                    id="professorPace"
                    size="sm"
                    minValue={1}
                    maxValue={3}
                    step={1}
                    showSteps
                    color="secondary"
                    value={professorPace}
                    onChange={handleSliderChange(setProfessorPace)}
                    marks={[
                      { value: 1, label: 'Slow' },
                      { value: 2, label: 'Just Right' },
                      { value: 3, label: 'Fast' },
                    ]}
                  />
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">Course</h2>
              <div className="flex flex-col gap-[2rem] ml-[2rem]">
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="courseDifficulty">How difficult is the course content?</label>
                  <Slider
                    id="courseDifficulty"
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps
                    color="secondary"
                    value={courseDifficulty}
                    onChange={handleSliderChange(setCourseDifficulty)}
                    marks={[
                      { value: 1, label: 'Very' },
                      { value: 2, label: 'Easy' },
                      { value: 3, label: 'Moderate' },
                      { value: 4, label: 'Hard' },
                      { value: 5, label: 'Very Hard' },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="courseLoad">How heavy is the course load?</label>
                  <Slider
                    id="courseLoad"
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps
                    color="secondary"
                    value={courseLoad}
                    onChange={handleSliderChange(setCourseLoad)}
                    marks={[
                      { value: 1, label: 'Very' },
                      { value: 2, label: 'Light' },
                      { value: 3, label: 'Manageable' },
                      { value: 4, label: 'Heavy' },
                      { value: 5, label: 'Very Heavy' },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="coursePace">How is the pace of the course?</label>
                  <Slider
                    id="coursePace"
                    size="sm"
                    minValue={1}
                    maxValue={3}
                    step={1}
                    showSteps
                    color="secondary"
                    value={coursePace}
                    onChange={handleSliderChange(setCoursePace)}
                    marks={[
                      { value: 1, label: 'Slow' },
                      { value: 2, label: 'Just Right' },
                      { value: 3, label: 'Fast' },
                    ]}
                  />
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">General</h2>
              <div className="flex flex-col gap-[2rem] ml-[2rem]">
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="takeAgain">Would you take this course again?</label>
                  <RadioGroup
                    id="takeAgain"
                    orientation="horizontal"
                    color="secondary"
                    value={takeAgain}
                    onValueChange={setTakeAgain}
                  >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="courseReview">Review of the course</label>
                  <Textarea
                    id="courseReview"
                    value={courseReview}
                    onChange={(e) => setCourseReview(e.target.value)}
                    placeholder="Course Review"
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label htmlFor="instructorReview">Review of the instructor</label>
                  <Textarea
                    id="instructorReview"
                    value={instructorReview}
                    onChange={(e) => setInstructorReview(e.target.value)}
                    placeholder="Instructor Review"
                  />
                </div>
              </div>
            </section>
            <Button className="bg-purple-500 font-bold text-white px-8 py-3 mt-4" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
