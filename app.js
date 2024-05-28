import {ChatOpenAI} from '@langchain/openai'
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import * as dotenv from 'dotenv'

dotenv.config()

const model = new ChatOpenAI('gpt-4')

const messages = [
    new SystemMessage("Translate the following from English to Italian"),
    new HumanMessage("Hi")
]

const response = await model.invoke(messages)
console.log('res', response)