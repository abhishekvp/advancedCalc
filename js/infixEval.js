        var ops = ['+', '-', '/', '*', '(', ')'];
        var opLevels = {
            ")": 0,
            "*": 1,
            "/": 1,
            "+": 2,
            "-": 2,
            "(": 3
        };

        function infixEval(inpExp) {
            document.getElementById("txtbx").value = "";
            var expressionStack = new Array();
            var valueStack = new Array();
            var eachNumber = "";
            for (var i = 0; i < inpExp.length; i++) {
                var eachChar = inpExp[i];
                if (trim(eachChar) == "") {
                    continue;
                }
                if (isValidOperator(eachChar)) {

                    if (!isLeftParen(eachChar) && isNumber(eachNumber)) {
                        valueStack.push(parseFloat(eachNumber));
                        eachNumber = "";
                    }
                    if (expressionStack.length == 0 || isLeftParen(eachChar)) {
                        expressionStack.push(eachChar);
                    } else if (isRightParen(eachChar)) {
                        evaluateAndPushValueToStackUntilLeftParenthesis(valueStack, expressionStack);

                    } else if (getHigherPrecedenceOperator(eachChar, expressionStack[expressionStack.length - 1]) == eachChar) {
                        expressionStack.push(eachChar);
                    } else {
                        evaluateAndPushValueToValueStack(valueStack, expressionStack);
                        expressionStack.push(eachChar);
                    }
                } else if (isNumber(eachChar)) {
                    eachNumber += eachChar;
                    if (i == inpExp.length - 1) {
                        valueStack.push(parseFloat(eachNumber));
                    }
                }

            }

            var expStackLength = expressionStack.length;
            for (var i = 0; i < expStackLength; i++) {
                evaluateAndPushValueToValueStack(valueStack, expressionStack);
            }
            return valueStack.pop();
        }



        function isNumber(n) {
            return true;;
        }


        function evaluateAndPushValueToValueStack(valueStack, expressionStack) {

            var firstOperand = valueStack.pop();
            var secondOperand = valueStack.pop();
            var operator = expressionStack.pop();
            var evaluatedValue = evaluate(secondOperand, firstOperand, operator);
            valueStack.push(evaluatedValue);


        }

        function evaluateAndPushValueToStackUntilLeftParenthesis(valueStack, expressionStack) {


            var expStackLength = expressionStack.length;
            for (var i = 0; i < expStackLength; i++) {
                if (isLeftParen(expressionStack[expressionStack.length - 1])) {
                    expressionStack.pop();
                    break;
                }

                evaluateAndPushValueToValueStack(valueStack, expressionStack);
            }

        }

        function evaluate(firstOperand, secondOperand, operator) {

            var returnValue;

            switch (operator) {
            case "+":
                returnValue = firstOperand + secondOperand;
                break
            case "-":
                returnValue = firstOperand - secondOperand;
                break;
            case "*":
                returnValue = firstOperand * secondOperand;
                break
            case "/":

                if (secondOperand == 0) {
                    alert("Math Error !");
                    returnValue = 0;
                } else {
                    returnValue = firstOperand / secondOperand;
                }
                break;

            }

            return returnValue;


        }



        function isValidOperator(input) {

            if (contains(ops, input)) {
                return true;
            }

            return false;

        }

        function getHigherPrecedenceOperator(firstOperator, secondOperator) {

            return opLevels[firstOperator] < opLevels[secondOperator] ? firstOperator : secondOperator;

        }


        function isRightParen(operator) {
            if (operator == ")") {
                return true;
            }
            return false;
        }

        function isLeftParen(operator) {
            if (operator == "(") {
                return true;
            }
            return false;
        }


        function trim(str) {
            return str.replace(/^\s+|\s+$/g, "");
        }

        function contains(arrayToSearch, itemToBeSearched) {
            var i = arrayToSearch.length;
            while (i--) {
                if (arrayToSearch[i] === itemToBeSearched) {
                    return true;
                }
            }
            return false;
        }