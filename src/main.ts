// for this import we need "custom-types/@types/*" in tsconfig.json/paths
import open from 'open';
// for this import we need "*" in tsconfig.json/paths
import TestComponent from 'components/TestComponent';

// this auto import now has an incorrect path. It should be "react"
import {FunctionComponent} from "node_modules/@types/react";
// this auto import now resolves absolutely instead of relative
import importedRelative from "src/importedRelative";


open('https://github.com/');

console.log(TestComponent);

const dummy: FunctionComponent|null = null;

console.log(importedRelative);
