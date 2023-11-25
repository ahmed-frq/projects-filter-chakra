import { Flex, Heading, Highlight ,Select, Card, CardHeader, CardBody, CardFooter, Divider,Text,ButtonGroup,Stack, Button, Image , useColorMode , Switch, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { Tilt } from 'react-tilt'

function App() {


  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          100,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }



// Projects //////

const configurators =  [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/600/51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
]

const websites = [    {
  "albumId": 1,
  "id": 10,
  "title": "beatae et provident et ut vel",
  "url": "https://via.placeholder.com/600/810b14",
  "thumbnailUrl": "https://via.placeholder.com/150/810b14"
},
{
  "albumId": 1,
  "id": 11,
  "title": "nihil at amet non hic quia qui",
  "url": "https://via.placeholder.com/600/1ee8a4",
  "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
},
{
  "albumId": 1,
  "id": 12,
  "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
  "url": "https://via.placeholder.com/600/66b7d2",
  "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
},
{
  "albumId": 1,
  "id": 13,
  "title": "repudiandae iusto deleniti rerum",
  "url": "https://via.placeholder.com/600/197d29",
  "thumbnailUrl": "https://via.placeholder.com/150/197d29"
},
{
  "albumId": 1,
  "id": 14,
  "title": "est necessitatibus architecto ut laborum",
  "url": "https://via.placeholder.com/600/61a65",
  "thumbnailUrl": "https://via.placeholder.com/150/61a65"
},
{
  "albumId": 1,
  "id": 15,
  "title": "harum dicta similique quis dolore earum ex qui",
  "url": "https://via.placeholder.com/600/f9cee5",
  "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
},
{
  "albumId": 1,
  "id": 16,
  "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
  "url": "https://via.placeholder.com/600/fdf73e",
  "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
},
{
  "albumId": 1,
  "id": 17,
  "title": "natus doloribus necessitatibus ipsa",
  "url": "https://via.placeholder.com/600/9c184f",
  "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
},
{
  "albumId": 1,
  "id": 18,
  "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
  "url": "https://via.placeholder.com/600/1fe46f",
  "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
},
{
  "albumId": 1,
  "id": 19,
  "title": "perferendis nesciunt eveniet et optio a",
  "url": "https://via.placeholder.com/600/56acb2",
  "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
},
{
  "albumId": 1,
  "id": 20,
  "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
  "url": "https://via.placeholder.com/600/8985dc",
  "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
},]




const [allprojects, setAllprojects] = useState([...configurators, ...websites])



const onChangefilter = (e) => {
  console.log(e.target.value)
  if(e.target.value === 'conf'){
 setAllprojects(configurators)
  }
  if(e.target.value === 'web'){
 setAllprojects(websites)
  }

  if(e.target.value ==! 'cong' && e.target.value ==! 'web'){
  setAllprojects([...configurators, ...websites])
  }
}


const {toggleColorMode} = useColorMode()
const formBackground = useColorModeValue("gray.200", "gray.900")
  
  return (
    <>
      <Flex
       backgroundColor={formBackground}
        w="100%"
        h="100%"
        direction="column"
        align="center"
      
      >
        
      <Heading lineHeight='tall' my={20}>
  <Highlight
    query='Projects'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
  >
   These Are My Most Cool Projects
  </Highlight>
  <Switch colorScheme='teal' size='lg' position='absolute' right={20} top={160} onChange={toggleColorMode} />
</Heading>


<Select onChange={onChangefilter} placeholder='All' width={500} size='lg' >
<option  value='conf'>Configurators</option>
  <option value='web'>Websites</option>
</Select>

<Flex gap={3} flexWrap="wrap" my={20} alignItems='start' justifyContent='center'>


{/* <Tilt options={defaultOptions} >
<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Live Link
      </Button>
    
    </ButtonGroup>
  </CardFooter>
</Card>
</Tilt> */}


{allprojects.map((i, e) => {
  // Use the variable 'e' inside the map function to fix the TypeScript error
  return (
    <Tilt options={defaultOptions} key={i.title}>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={i.url}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{i.title}</Heading>
            <Text>{i.title} This is the Desc</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Live Link
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Tilt>
  );
})}




      </Flex>


      </Flex>

    </>
  )
}

export default App
