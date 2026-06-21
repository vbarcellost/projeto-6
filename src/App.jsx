import { useMemo, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'
import { restaurants, menu } from './data'
import {
  Button, Card, CardBody, CardGrid, CardImage, CardTop, Container, Footer,
  FooterLogo, Header, HeaderContent, Hero, HeroTitle, Logo, MenuCard,
  MenuGrid, MenuImage, Modal, ModalCard, ModalImage, ModalOverlay, NavLink,
  Page, Rating, RestaurantHero, RestaurantHeroContent, Section, Socials, Tag,
} from './styles'

function Brand() {
  return <Logo to="/" aria-label="efood">e<span>food</span></Logo>
}

function Home() {
  return (
    <Page>
      <Header $home>
        <HeaderContent $center><Brand /></HeaderContent>
        <Hero>
          <HeroTitle>Viva experiências gastronômicas<br />no conforto da sua casa</HeroTitle>
        </Hero>
      </Header>
      <Section>
        <Container><CardGrid>
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id}>
              <CardImage src={restaurant.image} alt={restaurant.name} />
              <CardTop>
                {restaurant.featured && <Tag>Destaque da semana</Tag>}
                <Tag>{restaurant.type}</Tag>
              </CardTop>
              <CardBody>
                <h2>{restaurant.name}</h2>
                <Rating>{restaurant.rating} <span>★</span></Rating>
                <p>{restaurant.description}</p>
                <Button as={Link} to={`/restaurante/${restaurant.id}`}>Saiba mais</Button>
              </CardBody>
            </Card>
          ))}
        </CardGrid></Container>
      </Section>
      <FooterContent />
    </Page>
  )
}

function Restaurant() {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => String(item.id) === id) || restaurants[0]
  const [selected, setSelected] = useState(null)
  const dishes = useMemo(() => menu.map((dish) => ({ ...dish, restaurant: restaurant.name })), [restaurant.name])

  return (
    <Page>
      <Header>
        <HeaderContent>
          <NavLink to="/">Restaurantes</NavLink><Brand /><strong>0 produto(s) no carrinho</strong>
        </HeaderContent>
      </Header>
      <RestaurantHero $image={restaurant.hero}>
        <RestaurantHeroContent><span>{restaurant.type}</span><h1>{restaurant.name}</h1></RestaurantHeroContent>
      </RestaurantHero>
      <Section>
        <Container><MenuGrid>
          {dishes.map((dish) => (
            <MenuCard key={dish.id}>
              <MenuImage src={dish.image} alt={dish.name} />
              <h2>{dish.name}</h2>
              <p>{dish.short}</p>
              <Button type="button" onClick={() => setSelected(dish)}>Mais detalhes</Button>
            </MenuCard>
          ))}
        </MenuGrid></Container>
      </Section>
      <FooterContent />
      {selected && (
        <ModalOverlay onClick={() => setSelected(null)}>
          <Modal role="dialog" aria-modal="true" aria-label={`Detalhes de ${selected.name}`} onClick={(event) => event.stopPropagation()}>
            <button aria-label="Fechar" onClick={() => setSelected(null)}>×</button>
            <ModalImage src={selected.image} alt={selected.name} />
            <ModalCard>
              <h2>{selected.name}</h2><p>{selected.description}</p><p>Serve: de 2 a 3 pessoas</p>
              <Button type="button">Adicionar ao carrinho - R$ {selected.price}</Button>
            </ModalCard>
          </Modal>
        </ModalOverlay>
      )}
    </Page>
  )
}

function FooterContent() {
  return <Footer><FooterLogo><Brand /></FooterLogo><Socials><span>◎</span><span>◉</span><span>◍</span></Socials><p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega e qualidade dos produtos é toda do estabelecimento contratado.</p></Footer>
}

export default function App() {
  return <ThemeProvider theme={theme}><GlobalStyle /><BrowserRouter><Routes><Route path="/" element={<Home />} /><Route path="/restaurante/:id" element={<Restaurant />} /><Route path="*" element={<Home />} /></Routes></BrowserRouter></ThemeProvider>
}
