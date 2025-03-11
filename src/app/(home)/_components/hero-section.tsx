import { ImFeelingLuckyButton } from './im-feeling-lucky-button'
import { SearchForm } from './search-form'

export function HeroSection() {
  return (
    <section id="hero" className="flex w-full flex-col items-center gap-8 px-10 py-12">
      <h1 className="max-w-2xl text-center font-medium text-3xl leading-tight md:text-6xl">
        Endless Jokes, Infinite Laughs!
      </h1>
      <h2 className="max-w-lg text-center text-muted-foreground text-sm leading-relaxed md:text-lg">
        We've gathered the best <strong>Chuck Norris</strong> jokes of all time in one app. Swipe for Laughs!
      </h2>
      <div className="flex w-full max-w-2xl flex-col justify-center gap-2">
        <SearchForm />
        <div className="flex w-full place-content-center">
          <ImFeelingLuckyButton />
        </div>
      </div>
    </section>
  )
}
