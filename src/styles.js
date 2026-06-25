import { createGlobalStyle, styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const theme = {
  primary: '#E66767',
  background: '#FFEBD9',
  surface: '#FFF8F2',
  danger: '#C45D5D',
  white: '#FFF',
  text: '#E66767',
  pink: '#E66767',
  brown: '#E66767',
  cream: '#FFEBD9',
  tan: '#FFF8F2',
  terracotta: '#C45D5D'
}
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${({ theme }) => theme.surface}; color: ${({ theme }) => theme.text}; font-family: 'Roboto', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
  button, a { font: inherit; } img { display: block; max-width: 100%; }
`
export const Page = styled.div`min-height: 100vh; display: flex; flex-direction: column;`
export const Container = styled.div`width: min(1024px, calc(100% - 32px)); margin: 0 auto;`
export const Header = styled.header`
  height: ${({ $home }) => $home ? '384px' : '186px'}; color: ${({ theme }) => theme.primary}; background-color: ${({ theme }) => theme.background};
  background-image: radial-gradient(${({ theme }) => theme.tan} 1.2px, transparent 1.2px), linear-gradient(120deg, rgba(255,255,255,.3), transparent); background-size: 10px 10px, 100% 100%;
  @media (max-width: 600px) { height: ${({ $home }) => $home ? '320px' : '150px'}; }
`
export const HeaderContent = styled(Container)`
  height: 120px; display: flex; align-items: center; justify-content: ${({ $center }) => $center ? 'center' : 'space-between'}; font-size: 18px; font-weight: 900;
  @media (max-width: 600px) { height: 100px; font-size: 14px; gap: 12px; strong { text-align: right; } }
`
export const Logo = styled(Link)`
  display: inline-flex; width: 125px; height: 58px; align-items: center; justify-content: center; text-decoration: none;
  img { width: 125px; height: 58px; object-fit: contain; }
  @media (max-width: 600px) { width: 96px; height: auto; img { width: 96px; height: auto; } }
`
export const NavLink = styled(Link)`color: inherit; text-decoration: none;`
export const CartButton = styled.button`border: 0; background: transparent; color: inherit; font-weight: 900; cursor: pointer; @media (max-width: 600px) { max-width: 105px; text-align: right; }`
export const Hero = styled(Container)`
  height: 264px; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 40px;
`
export const HeroTitle = styled.h1`
  max-width: 540px; font-size: 36px; line-height: 42px; font-weight: 900; text-align: center;
  @media (max-width: 600px) { max-width: 360px; font-size: 27px; line-height: 33px; }
`
export const Section = styled.main`flex: 1; padding: 80px 0 120px; @media (max-width: 700px) { padding: 48px 0 72px; }`
export const CardGrid = styled.div`display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px 80px; @media (max-width: 780px) { grid-template-columns: 1fr; gap: 32px; }`
export const Card = styled.article`position: relative; border: 1px solid ${({ theme }) => theme.primary}; background: ${({ theme }) => theme.white}; display: flex; flex-direction: column;`
export const CardImage = styled.img`width: 100%; height: 217px; object-fit: cover;`
export const CardTop = styled.div`position: absolute; top: 16px; right: 16px; display: flex; gap: 8px;`
export const Tag = styled.span`background: ${({ theme }) => theme.primary}; color: ${({ theme }) => theme.background}; padding: 6px 8px; font-size: 12px; font-weight: 700;`
export const CardBody = styled.div`
  padding: 8px; display: grid; grid-template-columns: 1fr auto; flex: 1; align-items: center;
  h2 { font-size: 18px; line-height: 22px; } p { grid-column: 1 / -1; font-size: 14px; line-height: 22px; margin: 16px 0; color: ${({ theme }) => theme.primary}; }
`
export const Rating = styled.strong`font-size: 18px; span { color: #f3a928; font-size: 22px; }`
export const Button = styled.button`
  display: inline-block; width: fit-content; border: 0; padding: 6px 8px; background: ${({ theme }) => theme.primary}; color: ${({ theme }) => theme.background}; font-size: 14px; font-weight: 700; text-decoration: none; cursor: pointer; transition: filter .2s, transform .2s;
  &:hover { filter: brightness(.92); transform: translateY(-1px); }
`
export const RestaurantHero = styled.section`height: 280px; position: relative; color: white; background: linear-gradient(rgba(0,0,0,.48), rgba(0,0,0,.48)), url(${({ $image }) => $image}) center/cover;`
export const RestaurantHeroContent = styled(Container)`height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 25px 0 32px; span { font-size: 32px; font-weight: 100; } h1 { font-size: 32px; font-weight: 900; }`
export const MenuGrid = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; @media (max-width: 850px) { grid-template-columns: repeat(2, 1fr); } @media (max-width: 560px) { grid-template-columns: 1fr; }`
export const MenuCard = styled.article`
  background: ${({ theme }) => theme.primary}; color: ${({ theme }) => theme.background}; padding: 8px; display: flex; flex-direction: column; min-width: 0;
  h2 { font-size: 16px; margin: 8px 0; } p { font-size: 14px; line-height: 22px; margin-bottom: 8px; flex: 1; }
  ${Button} { width: 100%; text-align: center; background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.pink}; }
`
export const MenuImage = styled.img`width: 100%; height: 167px; object-fit: cover;`
export const Footer = styled.footer`
  min-height: 298px; padding: 40px 16px; display: flex; flex-direction: column; align-items: center; background: ${({ theme }) => theme.background}; color: ${({ theme }) => theme.primary}; text-align: center;
  > p { max-width: 480px; margin-top: 70px; font-size: 10px; line-height: 12px; }
`
export const FooterLogo = styled.div`${Logo} { pointer-events: none; }`
export const Socials = styled.div`display: flex; gap: 8px; margin-top: 32px; span { display: grid; place-items: center; width: 24px; height: 24px; color: white; background: ${({ theme }) => theme.pink}; border-radius: 5px; font-weight: 900; }`
export const ModalOverlay = styled.div`position: fixed; inset: 0; z-index: 10; display: grid; place-items: center; padding: 24px; background: rgba(0,0,0,.8);`
export const Modal = styled.div`
  position: relative; width: min(1024px, 100%); padding: 32px; display: grid; grid-template-columns: 280px 1fr; gap: 24px; background: ${({ theme }) => theme.primary}; color: ${({ theme }) => theme.background};
  > button { position: absolute; top: 8px; right: 12px; border: 0; background: none; color: white; font-size: 28px; cursor: pointer; }
  @media (max-width: 650px) { grid-template-columns: 1fr; padding: 32px 16px 16px; }
`
export const ModalImage = styled.img`width: 280px; height: 280px; object-fit: cover; @media (max-width: 650px) { width: 100%; height: 220px; }`
export const ModalCard = styled.div`h2 { font-size: 18px; margin-bottom: 16px; } p { font-size: 14px; line-height: 22px; margin-bottom: 16px; } ${Button} { background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.pink}; }`
export const CartBackdrop = styled.div`position: fixed; inset: 0; z-index: 20; background: rgba(0,0,0,.8);`
export const CartDrawer = styled.aside`
  position: absolute; top: 0; right: 0; width: min(360px, 100%); height: 100%; overflow-y: auto; padding: 32px 8px; background: ${({ theme }) => theme.primary}; color: ${({ theme }) => theme.background};
  > .close { position: absolute; top: 6px; right: 10px; border: 0; background: transparent; color: white; font-size: 25px; cursor: pointer; }
  > ${Button} { width: 100%; margin-top: 16px; text-align: center; background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.pink}; }
`
export const CartList = styled.ul`display: grid; gap: 16px; list-style: none;`
export const CartItem = styled.li`
  position: relative; min-height: 100px; padding: 8px 32px 8px 8px; display: grid; grid-template-columns: 80px 1fr; gap: 8px; background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.pink};
  > img { width: 80px; height: 80px; object-fit: cover; }
`
export const CartItemDetails = styled.div`h3 { font-size: 18px; margin-bottom: 12px; } p { font-size: 14px; }`
export const CartQuantity = styled.div`
  display: flex; align-items: center; gap: 8px; margin-top: 8px;
  button { width: 20px; height: 20px; border: 0; background: ${({ theme }) => theme.pink}; color: white; font-weight: 900; cursor: pointer; }
  span { min-width: 14px; text-align: center; font-size: 13px; font-weight: 700; }
`
export const RemoveButton = styled.button`position: absolute; right: 8px; bottom: 8px; width: 22px; height: 22px; border: 0; border-radius: 50%; background: ${({ theme }) => theme.pink}; color: white; font-size: 18px; line-height: 20px; cursor: pointer;`
export const CartTotal = styled.div`display: flex; justify-content: space-between; margin-top: 40px; color: white; font-size: 14px; font-weight: 700;`
export const CartEmpty = styled.div`padding: 48px 16px; text-align: center; color: white; strong { font-size: 18px; } p { margin-top: 8px; font-size: 14px; }`
export const CheckoutTitle = styled.h2`margin-bottom: 16px; color: white; font-size: 16px; line-height: 22px;`
export const CheckoutForm = styled.form`display: flex; flex-direction: column; gap: 8px;`
export const Field = styled.div`
  min-width: 0; display: flex; flex: 1; flex-direction: column; gap: 4px;
  label { color: white; font-size: 14px; font-weight: 700; }
  input { width: 100%; height: 32px; border: 2px solid transparent; padding: 0 8px; outline: none; background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.brown}; font-size: 14px; font-weight: 700; }
  input:focus { border-color: ${({ theme }) => theme.pink}; }
  input:invalid:not(:placeholder-shown) { border-color: ${({ theme }) => theme.terracotta}; }
`
export const FieldRow = styled.div`display: grid; grid-template-columns: ${({ $card }) => $card ? '2fr 1fr' : '1fr 1fr'}; gap: 8px;`
export const CheckoutActions = styled.div`
  display: grid; gap: 8px; margin-top: 16px;
  ${Button} { width: 100%; text-align: center; background: ${({ theme }) => theme.cream}; color: ${({ theme }) => theme.brown}; }
  ${Button}:first-child { background: ${({ theme }) => theme.pink}; color: white; }
`
export const OrderSuccess = styled.div`
  color: white;
  h2 { margin-bottom: 16px; font-size: 16px; }
  p { margin-bottom: 16px; font-size: 14px; line-height: 22px; }
  ${Button} { width: 100%; margin-top: 8px; text-align: center; background: ${({ theme }) => theme.pink}; }
`
