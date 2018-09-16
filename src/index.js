import { getType } from '@composi/get-type'

/**
 * 
 * @param {*} value 
 * @return {string} string
 */
function testSomething(value) {
  return getType(value)
}

const result = testSomething({name: 'Joe'})