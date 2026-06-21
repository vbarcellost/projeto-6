import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'
import { restaurants, menus } from './data'
import {
  Button, Card, CardBody, CardGrid, CardImage, CardTop, Container, Footer,
  FooterLogo, Header, HeaderContent, Hero, HeroTitle, Logo, MenuCard,
  MenuGrid, MenuImage, Modal, ModalCard, ModalImage, ModalOverlay, NavLink,
  Page, Rating, RestaurantHero, RestaurantHeroContent, Section, Socials, Tag,
  CartBackdrop, CartButton, CartDrawer, CartEmpty, CartItem, CartItemDetails,
  CartList, CartQuantity, CartTotal, RemoveButton, CheckoutActions,
  CheckoutForm, CheckoutTitle, Field, FieldRow, OrderSuccess,
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
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState('cart')
  const [delivery, setDelivery] = useState({ receiver: '', address: '', city: '', zip: '', number: '', complement: '' })
  const [payment, setPayment] = useState({ cardName: '', cardNumber: '', cvv: '', month: '', year: '' })
  const [orderId, setOrderId] = useState('')
  const dishes = (menus[restaurant.type] || []).map((dish) => ({ ...dish, restaurant: restaurant.name }))
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + Number(item.price.replace(',', '.')) * item.quantity, 0)

  function addToCart(dish) {
    setCart((current) => {
      const existing = current.find((item) => item.id === dish.id)
      if (existing) return current.map((item) => item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item)
      return [...current, { ...dish, quantity: 1 }]
    })
    setSelected(null)
    setCheckoutStep('cart')
    setCartOpen(true)
  }

  function changeQuantity(dishId, change) {
    setCart((current) => current
      .map((item) => item.id === dishId ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0))
  }

  function updateForm(setter) {
    return (event) => setter((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function finishOrder(event) {
    event.preventDefault()
    setOrderId(String(Math.floor(10000000 + Math.random() * 90000000)))
    setCheckoutStep('success')
  }

  function concludeOrder() {
    setCart([])
    setDelivery({ receiver: '', address: '', city: '', zip: '', number: '', complement: '' })
    setPayment({ cardName: '', cardNumber: '', cvv: '', month: '', year: '' })
    setCheckoutStep('cart')
    setCartOpen(false)
  }

  return (
    <Page>
      <Header>
        <HeaderContent>
          <NavLink to="/">Restaurantes</NavLink><Brand />
          <CartButton type="button" onClick={() => { setCheckoutStep('cart'); setCartOpen(true) }}>{itemCount} produto(s) no carrinho</CartButton>
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
              <Button type="button" onClick={() => addToCart(selected)}>Adicionar ao carrinho - R$ {selected.price}</Button>
            </ModalCard>
          </Modal>
        </ModalOverlay>
      )}
      {cartOpen && (
        <CartBackdrop onClick={() => setCartOpen(false)}>
          <CartDrawer role="dialog" aria-modal="true" aria-label="Carrinho de compras" onClick={(event) => event.stopPropagation()}>
            <button className="close" type="button" aria-label="Fechar carrinho" onClick={() => setCartOpen(false)}>×</button>
            {checkoutStep === 'cart' && cart.length === 0 ? (
              <CartEmpty><strong>O carrinho está vazio</strong><p>Adicione um prato para continuar.</p></CartEmpty>
            ) : checkoutStep === 'cart' ? (
              <>
                <CartList>
                  {cart.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <CartItemDetails>
                        <h3>{item.name}</h3>
                        <p>R$ {item.price}</p>
                        <CartQuantity>
                          <button type="button" aria-label={`Diminuir ${item.name}`} onClick={() => changeQuantity(item.id, -1)}>−</button>
                          <span>{item.quantity}</span>
                          <button type="button" aria-label={`Aumentar ${item.name}`} onClick={() => changeQuantity(item.id, 1)}>+</button>
                        </CartQuantity>
                      </CartItemDetails>
                      <RemoveButton type="button" aria-label={`Remover ${item.name}`} onClick={() => setCart((current) => current.filter((dish) => dish.id !== item.id))}>×</RemoveButton>
                    </CartItem>
                  ))}
                </CartList>
                <CartTotal><span>Valor total</span><strong>R$ {cartTotal.toFixed(2).replace('.', ',')}</strong></CartTotal>
                <Button type="button" onClick={() => setCheckoutStep('delivery')}>Continuar com a entrega</Button>
              </>
            ) : checkoutStep === 'delivery' ? (
              <CheckoutForm onSubmit={(event) => { event.preventDefault(); setCheckoutStep('payment') }}>
                <CheckoutTitle>Entrega</CheckoutTitle>
                <Field>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input id="receiver" name="receiver" value={delivery.receiver} onChange={updateForm(setDelivery)} required />
                </Field>
                <Field>
                  <label htmlFor="address">Endereço</label>
                  <input id="address" name="address" value={delivery.address} onChange={updateForm(setDelivery)} required />
                </Field>
                <Field>
                  <label htmlFor="city">Cidade</label>
                  <input id="city" name="city" value={delivery.city} onChange={updateForm(setDelivery)} required />
                </Field>
                <FieldRow>
                  <Field>
                    <label htmlFor="zip">CEP</label>
                    <input id="zip" name="zip" inputMode="numeric" pattern="[0-9]{8}" maxLength="8" value={delivery.zip} onChange={updateForm(setDelivery)} required />
                  </Field>
                  <Field>
                    <label htmlFor="number">Número</label>
                    <input id="number" name="number" inputMode="numeric" value={delivery.number} onChange={updateForm(setDelivery)} required />
                  </Field>
                </FieldRow>
                <Field>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input id="complement" name="complement" value={delivery.complement} onChange={updateForm(setDelivery)} />
                </Field>
                <CheckoutActions>
                  <Button type="submit">Continuar com o pagamento</Button>
                  <Button type="button" onClick={() => setCheckoutStep('cart')}>Voltar para o carrinho</Button>
                </CheckoutActions>
              </CheckoutForm>
            ) : checkoutStep === 'payment' ? (
              <CheckoutForm onSubmit={finishOrder}>
                <CheckoutTitle>Pagamento - Valor a pagar R$ {cartTotal.toFixed(2).replace('.', ',')}</CheckoutTitle>
                <Field>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input id="cardName" name="cardName" value={payment.cardName} onChange={updateForm(setPayment)} required />
                </Field>
                <FieldRow $card>
                  <Field>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" name="cardNumber" inputMode="numeric" pattern="[0-9]{16}" maxLength="16" value={payment.cardNumber} onChange={updateForm(setPayment)} required />
                  </Field>
                  <Field>
                    <label htmlFor="cvv">CVV</label>
                    <input id="cvv" name="cvv" inputMode="numeric" pattern="[0-9]{3}" maxLength="3" value={payment.cvv} onChange={updateForm(setPayment)} required />
                  </Field>
                </FieldRow>
                <FieldRow>
                  <Field>
                    <label htmlFor="month">Mês de vencimento</label>
                    <input id="month" name="month" inputMode="numeric" pattern="0[1-9]|1[0-2]" maxLength="2" placeholder="MM" value={payment.month} onChange={updateForm(setPayment)} required />
                  </Field>
                  <Field>
                    <label htmlFor="year">Ano de vencimento</label>
                    <input id="year" name="year" inputMode="numeric" pattern="[0-9]{4}" maxLength="4" placeholder="AAAA" value={payment.year} onChange={updateForm(setPayment)} required />
                  </Field>
                </FieldRow>
                <CheckoutActions>
                  <Button type="submit">Finalizar pagamento</Button>
                  <Button type="button" onClick={() => setCheckoutStep('delivery')}>Voltar para a edição de endereço</Button>
                </CheckoutActions>
              </CheckoutForm>
            ) : (
              <OrderSuccess>
                <h2>Pedido realizado - {orderId}</h2>
                <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                <Button type="button" onClick={concludeOrder}>Concluir</Button>
              </OrderSuccess>
            )}
          </CartDrawer>
        </CartBackdrop>
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
