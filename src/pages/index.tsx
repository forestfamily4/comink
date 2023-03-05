import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { FormattedMessage } from 'react-intl'
import CharacterDialog from '@/components/Main/CharacterDialog'

export default function Home() {

  return (
    <div>
      <h1>ComInk!</h1>
      <p><FormattedMessage id="home.hello" defaultMessage="こんにちは"></FormattedMessage></p>
      <CharacterDialog text="a"></CharacterDialog>
    </div>
  )
}
