// src/app/reviewForm/page.tsx
"use client";
import { useCourse } from "../../app/context/CourseContext";
import { useState } from "react";
import { Slider, Button, Textarea, Radio, RadioGroup } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ArrowBackIcon } from "../ui/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function ReviewForm() {
  const { selectedCourse } = useCourse();
  const router = useRouter();
  const [professorComprehensive, setProfessorComprehensive] =
    useState<number>(3);
  const [professorFluency, setProfessorFluency] = useState<number>(3);
  const [professorPace, setProfessorPace] = useState<number>(3);
  const [courseDifficulty, setCourseDifficulty] = useState<number>(3);
  const [courseLoad, setCourseLoad] = useState<number>(3);
  const [coursePace, setCoursePace] = useState<number>(3);
  const [takeAgain, setTakeAgain] = useState<string>("Yes");
  const [courseReview, setCourseReview] = useState<string>("");
  const [instructorReview, setInstructorReview] = useState<string>("");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSliderChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (value: number | number[]) => {
      if (typeof value === "number") {
        setter(value);
      }
    };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const navigateBack = () => {
    router.push("/reviewHistory");
  };

  const handleDeleteReview = () => {
    setIsSubmitted(false);
    setProfessorComprehensive(3);
    setProfessorFluency(3);
    setProfessorPace(2);
    setCourseDifficulty(3);
    setCourseLoad(3);
    setCoursePace(2);
    setTakeAgain("Yes");
    setCourseReview("");
    setInstructorReview("");
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
      <div className="text-xl flex flex-col items-center gap-4 ">
        <h1 className="text-2xl font-bold">
          {selectedCourse.code}-{selectedCourse.instructor}
        </h1>
        {isSubmitted ? (
          <div className="w-full max-w-4xl">
            <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">
              Review Submitted
            </h2>
            <div className="flex flex-col gap-2">
              <p>
                <strong>Professor Comprehensive:</strong>{" "}
                {professorComprehensive}
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
              <Button
                className="bg-red-500 font-bold text-white px-8 py-3 mt-4"
                onClick={handleDeleteReview}
              >
                Delete Review
              </Button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl flex flex-col gap-[2rem]">
            <section>
              <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">
                Professor
              </h2>
              <div className="flex flex-col gap-[2rem] ml-[2rem]">
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label>How comprehensive is the professor?</label>
                  <Slider
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps={true}
                    color="secondary"
                    value={professorComprehensive}
                    renderThumb={(props) => (
                      <div
                        {...props}
                        className="group top-1/2 bg-background border-small shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                      </div>
                    )}
                    classNames={{
                      base: "max-w-md gap-3",
                    }}
                    onChange={handleSliderChange(setProfessorComprehensive)}
                    marks={[
                      { value: 1, label: "Not" },
                      { value: 2, label: "Somewhat" },
                      { value: 3, label: "Fairly" },
                      { value: 4, label: "Very" },
                      { value: 5, label: "Highly" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label>How fluent is the professor?</label>
                  <Slider
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps={true}
                    color="secondary"
                    value={professorFluency}
                    renderThumb={(props) => (
                      <div
                        {...props}
                        className="group top-1/2 bg-background border-small shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                      </div>
                    )}
                    classNames={{
                      base: "max-w-md gap-3",
                    }}
                    onChange={handleSliderChange(setProfessorFluency)}
                    marks={[
                      { value: 1, label: "Not" },
                      { value: 2, label: "Somewhat" },
                      { value: 3, label: "Fairly" },
                      { value: 4, label: "Very" },
                      { value: 5, label: "Highly" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label>How is the pace of the professor?</label>
                  <Slider
                    size="sm"
                    minValue={1}
                    maxValue={3}
                    step={1}
                    showSteps={true}
                    color="secondary"
                    value={professorPace}
                    renderThumb={(props) => (
                      <div
                        {...props}
                        className="group top-1/2 bg-background border-small shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                      </div>
                    )}
                    classNames={{
                      base: "max-w-md gap-3",
                    }}
                    onChange={handleSliderChange(setProfessorPace)}
                    marks={[
                      { value: 1, label: "Slow" },
                      { value: 2, label: "Just Right" },
                      { value: 3, label: "Fast" },
                    ]}
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">
                Course
              </h2>
              <div className="flex flex-col gap-[2rem] ml-[2rem]">
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label>How difficult is the course content?</label>
                  <Slider
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps={true}
                    color="secondary"
                    value={courseDifficulty}
                    renderThumb={(props) => (
                      <div
                        {...props}
                        className="group top-1/2 bg-background border-small shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                      </div>
                    )}
                    classNames={{
                      base: "max-w-md gap-3",
                    }}
                    onChange={handleSliderChange(setCourseDifficulty)}
                    marks={[
                      { value: 1, label: "Very" },
                      { value: 2, label: "Easy" },
                      { value: 3, label: "Moderate" },
                      { value: 4, label: "Hard" },
                      { value: 5, label: "Very Hard" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label>How heavy is the course load?</label>
                  <Slider
                    size="sm"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    showSteps={true}
                    color="secondary"
                    value={courseLoad}
                    renderThumb={(props) => (
                      <div
                        {...props}
                        className="group top-1/2 bg-background border-small shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                      </div>
                    )}
                    classNames={{
                      base: "max-w-md gap-3",
                    }}
                    onChange={handleSliderChange(setCourseLoad)}
                    marks={[
                      { value: 1, label: "Very Light" },
                      { value: 2, label: "Light" },
                      { value: 3, label: "Moderate" },
                      { value: 4, label: "Heavy" },
                      { value: 5, label: "Very Heavy" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label>How is the pace of the course?</label>
                  <Slider
                    size="sm"
                    minValue={1}
                    maxValue={3}
                    step={1}
                    showSteps={true}
                    color="secondary"
                    value={coursePace}
                    renderThumb={(props) => (
                      <div
                        {...props}
                        className="group top-1/2 bg-background border-small shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                      </div>
                    )}
                    classNames={{
                      base: "max-w-md gap-3",
                    }}
                    onChange={handleSliderChange(setCoursePace)}
                    marks={[
                      { value: 1, label: "Slow" },
                      { value: 2, label: "Just Right" },
                      { value: 3, label: "Fast" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-[5rem]">
                  <label>Would you take this course again?</label>
                  <RadioGroup
                    value={takeAgain}
                    onValueChange={setTakeAgain}
                    orientation="horizontal"
                  >
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </RadioGroup>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-700 mb-[1rem]">
                Additional
              </h2>
              <label>
                Is there anything you would tell a fellow student who is
                interested in taking this course?
              </label>
              <p className="font-bold mt-[1rem]">About the course?</p>
              <Textarea
                placeholder=""
                minRows={3}
                value={courseReview}
                onChange={(e) => setCourseReview(e.target.value)}
                className="mb-2"
              />
              <p className="font-bold mt-[1rem]">About the instructor?</p>
              <Textarea
                placeholder=""
                minRows={3}
                value={instructorReview}
                onChange={(e) => setInstructorReview(e.target.value)}
              />
            </section>

            <Button onPress={onOpen} className="flex w-fit">
              Submit Review
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              isDismissable={false}
              isKeyboardDismissDisabled={true}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Leave a review?
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Once you leave a review, you cannot edit or leave
                        another one.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cancel
                      </Button>
                      <Button
                        className="flex items-center bg-gradient-to-r from-gradient-button-l to-gradient-button-r text-white px-8 py-3"
                        onClick={handleSubmit}
                        onPress={onClose}
                      >
                        Submit
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
