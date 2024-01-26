#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printHelp,printError,printSucсess} from './service/log.service.js'
import { saveKey } from "./service/storage.service.js";
const initCLI = ()=>{
  const  args= getArgs(process.argv);
  console.log(args);
  if(args.h){
    printHelp()
  }
  if(args.s){
    printSucсess()
  }
  if(args.t){
    saveKey('token', args.t)

  }

}

initCLI();


