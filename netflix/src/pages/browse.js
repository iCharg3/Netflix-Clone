import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from '../hooks';
import selectionFilter from "../utils/selection-filter";

export function BrowsePage(){

    const {films} = useContent("films");
    const {series} = useContent("series");
    const slides = selectionFilter({series,films});
    //console.log(slides);

    return <BrowseContainer slides={slides}/>
}