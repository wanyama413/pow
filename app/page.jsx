"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import {
  ChevronLeft,
  Circle,
  Pen,
  RotateCcw,
  SquareArrowOutUpRightIcon,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const [questionColor, setQuestionColor] = useState("#7B61FF");
  const [answerColor, setAnswerColor] = useState("#F2B963");
  const [buttonColor, setButtonColor] = useState("");
  const [buttonTextColor, setButtonTextColor] = useState("#ffffff");
  const [isSelectActive, setIsSelectActive] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleSelectChange = (isActive) => {
    console.log(isSelectActive);
    setIsSelectActive((oldActive) => !oldActive);
  };
  return (
    <main className="p-3 w-full">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <SquareArrowOutUpRightIcon />
          <p className="pl-3 text-[18px] font-medium"> Style Preferences</p>
        </div>{" "}
        <X color="#9EA6A8" />
      </div>
      <div className="border-b-[#EAEAEA] border-b-[1px]  ">
        <p className="mt-6 mb-5 font-[400] text-[14px] text-papa">
          LAYOUT STYLE
        </p>
        <div>
          <RadioGroup
            defaultValue="option-one"
            className="flex flex-col justify-evenly "
          >
            <div className="flex items-center justify-between  mb-4 ">
              <div className="flex items-center space-x-2 justify-between">
                <RadioGroupItem
                  onClick={handleSelectChange}
                  value="option-one"
                  id="option-one "
                />

                <Label htmlFor="option-one">Fullscreen</Label>
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton
                  className={`h-8 w-8 rounded-full ${
                    isSelectActive ? "bg-[#3D66F6]" : "bg-muted"
                  }`}
                />
                <div className="space-y-2">
                  <Skeleton
                    className={`h-4 w-[100px] bg-muted ${
                      isSelectActive ? "bg-[#3D66F6]" : "bg-muted"
                    }`}
                  />
                  <Skeleton
                    className={`h-4 w-[50px] bg-muted ${
                      isSelectActive ? "bg-[#3D66F6]" : "bg-muted"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={handleSelectChange}
                  value="option-two"
                  id="option-two"
                />
                <Label htmlFor="option-two">Compact</Label>
              </div>
              <div className="flex items-center space-x-4  ">
                <div className="space-y-2">
                  <Skeleton
                    className={`h-4 w-[50px] ${
                      !isSelectActive ? "bg-[#3D66F6]" : "bg-muted"
                    }`}
                  />
                  <Skeleton
                    className={`h-4 w-[25px] ${
                      !isSelectActive ? "bg-[#3D66F6]" : "bg-muted"
                    }`}
                  />
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="mt-5 flex items-center mb-4">
        <ChevronLeft />{" "}
        <p className="font-medium text-[16px]">
          Warm Green (Copy) typ<span className="font-[300]">|</span>
        </p>
      </div>
      <div className="md:grid grid-cols-2 items-center mb-8 gap-3">
        <div>
          <p className="text-papa text-[12px]"> Input Field Style</p>

          <div className="flex justify-center  ">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Regular boxes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="est">Kenya</SelectItem>
                <SelectItem value="cst">Uganda</SelectItem>
                <SelectItem value="mst">Tanzania</SelectItem>
                <SelectItem value="pst">Djibouti</SelectItem>
                <SelectItem value="akst">Ghana</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <p className="mt-4 text-papa text-[12px]"> Form font</p>
          <div className="flex justify-center">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Roboto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="est">Inter</SelectItem>
                <SelectItem value="cst">Helvetica</SelectItem>
                <SelectItem value="mst">Sans Serif</SelectItem>
                <SelectItem value="pst">Poppy</SelectItem>
                <SelectItem value="akst">Reid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-4 mb-2 text-papa text-[12px]">Colors</p>
      </div>
      {isClient && (
        <div className="md:grid grid-cols-4">
          <div className="flex justify-between mb-3 md:justify-evenly">
            <div>Questions</div>
            <div className="w-[20px] h-[20px] rounded-[20px] overflow-hidden p-3 m-0 border-[4px] border-white shadow-lg">
              <input
                className="outline-none border-none mt-[-30px] mr-0 mb-0 ml-[-30px] p-0 h-[100px] w-[100px]"
                value={questionColor}
                type="color"
                name="questionColor"
                id="questionColor"
                onChange={(e) => setQuestionColor(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between mb-3 md:justify-evenly">
            <div>Answers</div>
            <div className="w-[20px] h-[20px] rounded-[20px] overflow-hidden p-3 m-0 border-[4px] border-white shadow-lg">
              <input
                className="outline-none border-none mt-[-30px] mr-0 mb-0 ml-[-30px] p-0 h-[100px] w-[100px]"
                value={answerColor}
                type="color"
                name="answerColor"
                id="answerColor"
                onChange={(e) => setAnswerColor(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between mb-3 md:justify-evenly">
            <div>Buttons</div>
            <div className="w-[20px] h-[20px] rounded-[20px] overflow-hidden p-3 m-0 border-[4px] border-white shadow-lg">
              <input
                className="outline-none border-none mt-[-30px] mr-0 mb-0 ml-[-30px] p-0 h-[100px] w-[100px]"
                value={buttonColor}
                type="color"
                name="buttonColor"
                id="buttonColor"
                onChange={(e) => setButtonColor(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between mb-3 md:justify-evenly">
            <div>Button Text</div>
            <div className="w-[20px] h-[20px] rounded-[15px] overflow-hidden p-3 m-0 border-[4px] border-gray-100 shadow-lg">
              <input
                className="outline-none border-none mt-[-30px] mr-0 mb-0 ml-[-30px] p-0 h-[100px] w-[100px]"
                value={buttonTextColor}
                type="color"
                name="buttonTextColor"
                id="buttonTextColor"
                onChange={(e) => setButtonTextColor(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
      <p className="mt-4 text-papa text-[12px] mb-3"> Background Image</p>
      <div className="relative w-full h-[125px] flex justify-center  p-2 border-gray-[#333] border-[1px] rounded-[5px]">
        <img className="w-full h-full" src="/baby.png" alt="" />
        <div className="absolute bg-white p-[5px] rounded-full top-4 right-7">
          <Pen size={15} strokeWidth={0.5} />
        </div>
      </div>
      <div className="flex items-center mt-3 mt-4">
        <RotateCcw
          className="-scale-y-100 rotate-90"
          size={20}
          color="#cccccc"
          strokeWidth={2}
        />{" "}
        <p className="ml-2 ">Reset background</p>
      </div>
    </main>
  );
};

export default Home;
