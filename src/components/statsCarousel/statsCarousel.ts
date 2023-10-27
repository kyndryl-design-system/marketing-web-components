import { html, LitElement } from 'lit';
import { customElement, query, queryAssignedElements, property, state } from 'lit/decorators.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import stylesheet from './statsCarousel.scss';

/**
 * Stats Carousel.
 * Container for Stats Carousel Slide components.
 * The component pins when scrolling into view and unpins after scrolling through all slides.
 * @slot unnamed - Slot for Stat Carousel Slide components.
 */
@customElement('kd-stats-carousel')
export class StatsCarousel extends LitElement {
	static override styles = stylesheet;

	/** Component title. Max character count: 66 */
	@property({ type: String })
	carouselTitle = '';

	/** Global Color Palette */
	@property({ type: String })
	colorPalette = '';

	/**
	 * Outer component element that triggers scroll animations.
	 * @ignore
	 */
	@query('.kd-stats-carousel')
	carousel!: HTMLElement;

	/**
	 * Carousel container that gets pinned on scroll.
	 * @ignore
	 */
	@query('.kd-stats-carousel-container')
	carouselContainer!: HTMLElement;

	/**
	 * Container of all slide components.
	 * @ignore
	 */
	@query('.kd-stats-carousel-slides')
	slidesContainer!: HTMLElement;

	/**
	 * All Stats Carousel Slide components
	 * @ignore
	 */
	@queryAssignedElements({ selector: 'kd-stats-carousel-slide' })
	slides!: Array<HTMLElement>;

	/**
	 * Check mounted state to init ScrollTrigger.
	 * @ignore
	 */
	@state()
	isInit = true;

	/**
	 * Track active slide to update pagination dots.
	 * @ignore
	 */
	@state()
	activeSlideIndex = 0;

	/**
	 * SetTimeout used to reset view on resize event.
	 * @ignore
	 */
	private resizeTimer: ReturnType<typeof setTimeout> | undefined;

	/**
	 * resizeTimer delay to wait until all resize events complete.
	 * @ignore
	 */
	private resizeDelay = 100;

	/**
	 * Delay resetting view until repaint completes.
	 * @ignore
	 */
	private resetDelay = 300;

	override connectedCallback() {
		super.connectedCallback();
		gsap.registerPlugin(ScrollTrigger);

		// wait until resize ends to reset the view
		window.addEventListener('resize', () => {
			clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(() => {
				this.resetView();
			}, this.resizeDelay);
		});
	}

	handleSlotChange() {
		// only init carousel after elements are defined
		if (this.isInit) {
			this.setHeight();
			this.initScrollTrigger();
			this.isInit = false;
		}
	}

	private resetView() {
		this.removeHeight();

		// delay setting height to allow repaint to finish
		setTimeout(() => {
			this.setHeight();
			ScrollTrigger.refresh();
		}, this.resetDelay);
	}

	private setHeight() {
		const slideHeights: number[] = [];

		// set the overall scrolling height
		this.carousel.style.minHeight = `${this.slides.length * 100}vh`;

		// get each slide height
		this.slides.forEach((slide) => {
			slide.style.height = 'auto';
			slide.style.minHeight = 'auto';
			slideHeights.push(slide.offsetHeight);
		});

		// get the tallest slide height
		const maxHeight: number = Math.max(...(slideHeights));

		// set heights
		this.slides.forEach((slide) => {
			slide.style.height = `${maxHeight}px`;
			slide.style.minHeight = `${maxHeight}px`;
			slide.style.position = 'absolute';
			slide.style.width = '100%';
		});

		this.slidesContainer.style.height = `${maxHeight}px`;
	}

	// remove element height, so we can recalculate it on window resize
	private removeHeight() {
		this.slidesContainer.style.removeProperty('height');

		this.slides.forEach((slide) => {
			slide.style.removeProperty('height');
			slide.style.removeProperty('min-height');
		});
	}

	private initScrollTrigger() {
		const slidesTimeline = gsap.timeline();

		this.slides.forEach((slide, i: number) => {
			const duration = 1;

			const tweenIn = gsap.fromTo(slide, {
				autoAlpha: 0,
				y: '50%',
			}, {
				autoAlpha: 1,
				y: 0,
				ease: 'power2.inOut',
				duration: duration,
				onStart: () => {
					this.activeSlideIndex = i;
				},
				onReverseComplete: () => {
					this.activeSlideIndex = i - 1;
				},
			});

			const tweenOut = gsap.fromTo(slide, {
				autoAlpha: 1,
				y: 0,
			}, {
				autoAlpha: 0,
				y: '-50%',
				ease: 'power2.inOut',
				duration: duration,
			});

			// empty tween to delay next slide animation
			const tweenSpacer = gsap.to({},  {
				duration: duration * 3,
			});

			// don't animate first slide in
			if (i !== 0) {
				slidesTimeline.add(tweenIn);
			}

			// don't animate last slide out
			if (i !== this.slides.length - 1) {
				slidesTimeline.add(tweenOut, `+=${duration}`);
			}

			// add spacer between slides for timing
			if (i === this.slides.length - 1) {
				slidesTimeline.add(tweenSpacer);
			}
		});

		ScrollTrigger.create({
			trigger: this.carousel,
			// offset the center positions so the content is center aligned in viewport
			start: () => {
				const centerOffset = `${this.carouselContainer.offsetHeight / 2}px`;
				return `top center-=${centerOffset}`;
			},
			end: () => {
				const centerOffset = `${this.carouselContainer.offsetHeight / 2}px`;
				return `bottom center+=${centerOffset}`;
			},
			pin: this.carouselContainer,
			scrub: 0,
			markers: false,
			animation: slidesTimeline,
		});
	}

	/**
	 * Render pagination dots with active class based on activeSlideIndex.
	 * @ignore
	 */
	private get renderPagination() {
		return html`
			<div class="kd-stats-carousel-pagination">
				${this.slides.map((_slide, i) => {
					return html`
						<div class="kd-stats-carousel-pagination-item ${i === this.activeSlideIndex ? 'is-active' : ''}"></div>
					`
				})}
			</div>
		`
	}

	override render() {
		return html`
			<div class="kd-stats-carousel ${this.colorPalette}">
				<div class="kd-stats-carousel-container">
					<div class="kd-grid">
						<div class="kd-stats-carousel-col kd-grid__col--sm-4 kd-grid__col--md-6 kd-grid__col--lg-10">
							${this.carouselTitle ?
								html`
									<h2 class="kd-stats-carousel-title kd-type--headline-06">${this.carouselTitle}</h2>
								`
								: null
							}
						</div>
					</div>
					<div class="kd-grid">
						<div class="kd-stats-carousel-col kd-grid__col--sm-4 kd-grid__col--md-6 kd-grid__col--lg-10">
							<div class="kd-stats-carousel-slides">
								<slot @slotchange=${this.handleSlotChange}></slot>
							</div>
						</div>
						<div class="kd-grid__col--sm-4 kd-grid__col--md-1">
							${this.renderPagination}
						</div>
					</div>
				</div>
			</div>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-stats-carousel': StatsCarousel;
	}
}
