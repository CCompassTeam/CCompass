'use client';

import {
  Button,
} from '@nextui-org/react';
import { useState } from 'react';
import DropdownInput from '../ui/dropdownInput';

const steps = [
  {
    id: 'Step 1',
    name: "Let's get your account set up!",
    fields: [{ field: 'name', title: 'Name', options: [] }, { field: 'userName', title: 'Username', options: [] }],
  },
  {
    id: 'Step 2',
    name: 'Which school are you currently attending?',
    fields: [{ field: 'school', title: 'School Name', options: ['University of British Columbia', 'University of London'] }],
  },
  {
    id: 'Step 3',
    name: 'What are you studying?',
    fields: [{ field: 'degree', title: 'Degree', options: ["Undergraduate/Bachelor's", 'Masters', 'PhD'] },
      {
        field: 'faculty',
        title: 'Faculty',
        options: ['Science', 'Arts', 'Applied Sciences'],

      },
      {
        field: 'major',
        title: 'Major/Program',
        options: ['Computer Science', 'Biology', 'Mathematics'],
      },
      {
        field: 'year',
        title: 'Year Level',
        options: [
          '0/Incoming',
          '1',
          '2',
          '3',
          '4',
          '5+',
        ],
      },
    ],
  },
  {
    id: 'Step 4',
    fields: [],
    name: 'Complete',
  },
];

export default function MultiForm() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const next = async () => {
    // TODO: trigger validation on each step
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center h-screen w-full">
      <section className="flex flex-col gap-4 justify-center items-center w-5/12">
        <form className="flex flex-col items-left gap-2 w-full">
          {
            currentStep === 0
            && (

            <>
              <h1 className="flex flex-col text-3xl py-7">
                {steps[0].name}
              </h1>
              {steps[0].fields.map((field) => (
                <>
                  <h2 className="flex flex-col text-3m py-1">{field.title}</h2>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </>
              ))}
            </>
            )
        }
          {
            (currentStep === 1 || currentStep === 2) && (
            <>
              <h1 className="flex flex-col text-3xl py-7">
                {steps[currentStep].name}
              </h1>
              {steps[currentStep].fields.map((field) => (
                <>
                  <h2 className="flex flex-col text-3m py-1">{field.title}</h2>
                  <DropdownInput options={[...field.options]} />
                </>
              ))}
            </>
            )
        }
        </form>
      </section>
      <footer className="flex w-screen justify-around pt-10">
        <Button className="px-2 py-3 w-1/12" onClick={prev} disabled={currentStep === 0}>
          Back
        </Button>

        <Button className="bg-violet-500 font-bold text-white px-2 py-3 w-1/12" onClick={next} disabled={currentStep === steps.length - 1}>
          Next
        </Button>

      </footer>
    </div>

  );
}
