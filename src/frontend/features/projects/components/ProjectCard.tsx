"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export function ProjectCard({item}:{
  item: {
    image: string
    title: string
    description: string
    githubLink: string
    projectLink: string
  }
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {item?.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={item?.image || 'https://placehold.co/400x400'}
            //height="400"
            //width="400"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={item?.githubLink || '#'}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-2"
          >
            <span className="font-bold">
            Github
            </span>
            <span>
            <FaGithub size={24}/> 
            </span>
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={item?.projectLink || '#'}
            target="__blank"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <span>
            Live Project
            </span>
            <span>
            <HiArrowTopRightOnSquare size={24}/> 
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}