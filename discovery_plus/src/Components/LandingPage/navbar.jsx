    import { Search2Icon } from "@chakra-ui/icons";
    import {Flex,Box,Spacer, Image,Input,InputGroup,InputRightElement, Center, Button} from "@chakra-ui/react";
    import {Link} from "react-router-dom"
    
    export const Navbar= () => {

    let ss = JSON.parse(localStorage.getItem("s"));
    console.log(ss);
    
    return (
         <>
        
            <Flex bg="black" alignItems="center" h="60px"gap={7} justifyContent={"center"} p="20px" >
                <Box display="flex" gap={4} >
                <Image w="200px" alt="discovery Logo" src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" />
         
          
             </Box>
             
             <Box  display="flex" gap={4} color="gray.200" maxw="300px" 
              font-family='Roboto-Regular, sans-serif'
              font-weight="700">
                <Link to="/" >Home</Link>
                <Link to="/explore">Explore</Link> 
                <Link to="/kids">Kids</Link>
                <Link to="/shorts">Shorts</Link>
                <Link to="/mindblown">Mindblown</Link> 
                <Link to="/premium">Premium</Link>
               
                </Box>
            <Spacer />
            <Center >
                <InputGroup mr={5}>
                    <Input border="none" color="white"  placeholder="Search for a show, episode, shorts etc" w={'330px'} />
                    <InputRightElement pointerEvents='none' children={<Search2Icon color='gray.300' />} />
                 </InputGroup>

                <Link to="/signin"><Button border="1px solid" bg="black" color="white" m={3}> {!ss? "Sign In" : "My Account " } </Button></Link>
                <Link to="/signin"><Button border="none" bg="blue.500" color="white"> {"Buy Plan" } </Button></Link>
            </Center>
           
                </Flex>
               
        </>
    );  
};
