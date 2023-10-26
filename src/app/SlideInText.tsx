import { useInView, animated } from '@react-spring/web';

interface Props {
	className?: string;
	children?: React.ReactNode;
	from?: number;
	to?: number;
}

function SlideInText({ className, children, from=-100, to=0 }: Props) {

	const [ref, springs] = useInView(
			() => ({
					   from: {
						   opacity: 0,
						   x: from,
					   },
					   to: {
						   opacity: 1,
						   x: to,
					   },
				   }),
				   {
					   rootMargin: '-15% 0%',
				   }
			);

	return <animated.div ref={ref} style={springs} className={className}>{children}</animated.div>;
}

export default SlideInText;
