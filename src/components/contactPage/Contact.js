import {
  Box,
  Button,
  Center,
  Checkbox,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Contact = ({ theme }) => {
  const toast = useToast();
  const {
    isOpen: isLoadingOpen,
    onOpen: onLoadingOpen,
    onClose: onLoadingClose,
  } = useDisclosure();
  const alertToast = (message, alertStatus) =>
    toast({
      title: message,
      status: alertStatus,
      duration: 1500,
      isClosable: true,
    });

  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState('');
  const [projectName, setProjectNameInput] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectType, setProjectType] = useState([]);
  const [projectBudget, setProjectBudget] = useState([]);

  const stringContainsChar = inputString => {
    for (let i = 0; i < inputString.length; i++) {
      if (/[a-zA-Z]/i.test(inputString.charAt(i))) {
        return true;
      }
    }
    return false;
  };

  const handlePhoneNumber = inputPhone => {
    if (/[a-zA-Z]/i.test(inputPhone.charAt(inputPhone.length - 1))) {
      alertToast('Only Number Accepted', 'warning');
    }
    setPhoneInput(inputPhone);
  };

  const handleProjectType = inputProjectType => {
    if (projectType.includes(inputProjectType)) {
      let arrayIndexOf = projectType.indexOf(inputProjectType);
      projectType.splice(arrayIndexOf, 1);
    } else {
      setProjectType(projectType => [...projectType, inputProjectType]);
    }
  };

  const handleProjectBudget = inputProjectBudget => {
    if (projectBudget.includes(inputProjectBudget)) {
      let arrayIndexOf = projectBudget.indexOf(inputProjectBudget);
      projectBudget.splice(arrayIndexOf, 1);
    } else {
      setProjectBudget(projectBudget => [...projectBudget, inputProjectBudget]);
    }
  };

  const submitContactForm = e => {
    onLoadingOpen();
    e.preventDefault();

    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();

    var message = projectDescription.replace(/(\r\n|\n|\r|\n|\t)/gm, ' '); //remove those line breaks for textarea

    if (nameInput === '' || nameInput.length < 3) {
      onLoadingClose();
      alertToast('Invalid Name', 'warning');
    } else if (phoneInput === '' || phoneInput === undefined) {
      onLoadingClose();
      alertToast('Invalid Phone Number', 'warning');
      console.log('phoneInput1');
      console.log(phoneInput);
    } else if (phoneInput.length < 10) {
      onLoadingClose();
      alertToast('Invalid Phone Number', 'warning');
      console.log('phoneInput2');
      console.log(phoneInput);
    } else if (
      emailInput === '' ||
      emailInput.length < 3 ||
      !emailInput.match('@')
    ) {
      onLoadingClose();
      alertToast('Invalid Email', 'warning');
    } else if (stringContainsChar(phoneInput)) {
      onLoadingClose();
      console.log(phoneInput);
      alertToast('Invalid Phone Number', 'warning');
    } else if (projectName === '' || projectName.length < 3) {
      onLoadingClose();
      alertToast('Invalid Project Name', 'warning');
    } else if (message === '' || message.length < 10) {
      onLoadingClose();
      alertToast('Invalid Project Description', 'warning');
    } else if (projectType === '' || projectType.length <= 0) {
      onLoadingClose();
      alertToast('Select Project Type', 'warning');
    } else if (projectBudget === '' || projectBudget.length <= 0) {
      onLoadingClose();
      alertToast('Select Project Budget', 'warning');
    } else {
      var send_message =
        'Hey Sahil, you have a contact detail from a new client!!!%0A%0A' +
        '<b>Name:</b> ' +
        nameInput +
        '%0A<b>Phone: </b>' +
        phoneInput +
        '%0A<b>Email: </b>' +
        emailInput +
        '%0A<b>Project Name: </b>' +
        projectName +
        '%0A<b>Project Description: </b> ' +
        message +
        '%0A<b>Project Type: </b>' +
        projectType +
        '%0A<b>Project Budget: </b>' +
        projectBudget +
        '%0A<b>Date: </b> ' +
        date +
        '%0A<b>Time: </b> ' +
        time;
      var bot_token = '5621926128:AAHvSlyrj5bw9UwTr6AZ8wvtxgtAO6n_WFE';
      var chat_id = 788765432;
      var url =
        'https://api.telegram.org/bot' +
        bot_token +
        '/sendMessage?chat_id=' +
        chat_id +
        '&text=' +
        send_message +
        '&parse_mode=html';
      var xhttp = new XMLHttpRequest();

      // loading status
      onLoadingOpen();
      console.log('message sending...');
      alertToast('Message Sending', 'info');

      // send a request
      xhttp.open('GET', url, true);
      xhttp.send();

      // response message
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          // storing the responses
          var data = JSON.parse(xhttp.responseText);
          var uploadResult = data['ok'];
          console.log('uploadResult=', uploadResult);

          // conditions to show response messages
          if (uploadResult === true) {
            onLoadingClose();
            alertToast('Successfully message delivered', 'success');
          } else {
            onLoadingClose();
            alertToast('Failed to send message', 'error');
          }
        } else {
          onLoadingClose();
          console.log('failed to send message');
        }
      };
    }
  };

  return (
    <Box fontFamily={'Montserrat'}>
      <Box pt={20}>
        <Text
          fontSize={'26px'}
          fontWeight={'thin'}
          letterSpacing={1.1}
          color={'grey'}
          textAlign={{ base: 'center', md: 'left' }}
          mx={6}
        >
          Let's start a new project together,{' '}
          <Text
            as={'span'}
            fontWeight={'semibold'}
            color={theme === 'light' ? '#010101' : '#F2F2F2'}
          >
            <Text as={'p'} display={{ base: 'none', md: 'block' }}></Text>
            Contact Now{' '}
          </Text>
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
          gap={{ base: '', md: 10, lg: 10, xl: 10 }}
          mx={{ base: 3, md: 6, lg: 6, xl: 6 }}
        >
          <Box mt={7}>
            <Text
              fontWeight={'semibold'}
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={6}
              mb={12}
            >
              <Text mb={5}>Name: </Text>
              <input
                id="clientName"
                type="text"
                placeholder="Robert Downey Jr."
                fontWeight={'semibold'}
                onChange={e => setNameInput(e.target.value)}
              />
            </Text>
            <Text
              fontWeight={'semibold'}
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={6}
              mb={12}
            >
              <Text mb={5}>Phone: </Text>
              <input
                id="clientPhone"
                type="text"
                placeholder="+1 1234567890"
                fontWeight={'semibold'}
                pattern={'[0-9]'}
                onChange={e => handlePhoneNumber(e.target.value)}
                // onChange={e => setPhoneInput(e.target.value)}
              />
            </Text>
            <Text
              fontWeight={'semibold'}
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={6}
              mb={12}
            >
              <Text mb={5}>E-mail:</Text>
              <input
                id="clientEmail"
                type="email"
                placeholder="rd.jr@gmail.com"
                fontWeight={'semibold'}
                onChange={e => setEmailInput(e.target.value)}
              />
            </Text>
          </Box>
          <Box mt={7}>
            <Text
              fontWeight={'semibold'}
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={{ base: '-25px', md: 6, lg: 6, xl: 6 }}
              mb={12}
            >
              <Text mb={5}>Project Name: </Text>
              <input
                id="clientProjectName"
                type="text"
                placeholder="My Project"
                fontWeight={'semibold'}
                onChange={e => setProjectNameInput(e.target.value)}
              />
            </Text>
            <Text
              fontWeight={'semibold'}
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={6}
              mb={12}
            >
              <Text verticalAlign={'top'} mb={5}>
                Project Description: <br />
              </Text>
              <textarea
                id="clientProjectDescription"
                placeholder="Describe your project in few lines"
                rows={6}
                style={{ overflow: 'hidden' }}
                fontWeight={'semibold'}
                onChange={e => setProjectDescription(e.target.value)}
              />
            </Text>
          </Box>
          <Box mt={{ base: 7, md: 0, lg: 0, xl: 0 }}>
            <Text fontWeight={'semibold'} fontSize={'18px'}>
              What do you want to work on?
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              <Checkbox
                my={3}
                colorScheme="green"
                value={'Portfolio Design'}
                onChange={e => handleProjectType(e.target.value)}
              >
                Portfolio Design
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'Landing Page Design'}
                onChange={e => handleProjectType(e.target.value)}
              >
                Landing Page Design
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'Management Tools'}
                onChange={e => handleProjectType(e.target.value)}
              >
                Management Tools
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'Android Application'}
                onChange={e => handleProjectType(e.target.value)}
              >
                Android Application
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'Other'}
                onChange={e => handleProjectType(e.target.value)}
              >
                Other
              </Checkbox>{' '}
              <br />
            </Text>
          </Box>
          <Box mt={{ base: 7, md: 0, lg: 0, xl: 0 }}>
            <Text fontWeight={'semibold'} fontSize={'18px'}>
              What is your budget for the project?
            </Text>
            <Text
              fontSize={'16px'}
              mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
              mt={3}
            >
              <Checkbox
                my={3}
                colorScheme="green"
                value={'Less than 10,000 INR'}
                onChange={e => handleProjectBudget(e.target.value)}
              >
                Less than 10,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'10,000 INR to 20,000 INR'}
                onChange={e => handleProjectBudget(e.target.value)}
              >
                10,000 INR to 20,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'20,000 INR to 50,000 INR'}
                onChange={e => handleProjectBudget(e.target.value)}
              >
                20,000 INR to 50,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'50,000 INR to 1,00,000 INR'}
                onChange={e => handleProjectBudget(e.target.value)}
              >
                50,000 INR to 1,00,000 INR
              </Checkbox>{' '}
              <br />
              <Checkbox
                my={3}
                colorScheme="green"
                value={'More than 1,00,000 INR'}
                onChange={e => handleProjectBudget(e.target.value)}
              >
                More than 1,00,000 INR
              </Checkbox>{' '}
              <br />
            </Text>
          </Box>
        </SimpleGrid>
        <Box textAlign={'left'} mx={{ base: 3, md: 6, lg: 6, xl: 6 }}>
          <Button
            color={'#FFFFFF'}
            bg={'#27AE60'}
            _hover={'none'}
            fontWeight={'semibold'}
            mx={{ base: 0, md: 6, lg: 6, xl: 6 }}
            my={6}
            borderRadius="none"
            onClick={submitContactForm}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Modal
        isCentered
        blockScrollOnMount={false}
        isOpen={isLoadingOpen}
        onClose={onLoadingClose}
        size={'3xl'}
      >
        <ModalOverlay />
        <ModalContent shadow={'none'} bg={'transparent'}>
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#27AE60"
              size="xl"
            />
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;
