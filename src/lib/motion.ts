const motionElements = document.querySelectorAll<HTMLElement>("[data-motion]");

motionElements.forEach((el) => {
    const globalEasing = el.getAttribute("data-motion-easing") || "ease-in-out";

    if (el.getAttribute("data-motion")?.includes("fade")) {
        const fadeFrom = el.getAttribute("data-motion-fade-from") || "0";
        const duration = el.getAttribute("data-motion-duration") || "500";
        const easing =
            el.getAttribute("data-motion-fade-easing") || globalEasing;
        const delay = el.getAttribute("data-motion-delay") || "0";

        el.style.opacity = fadeFrom;
        el.style.transition =
            el.style.transition.length > 0
                ? el.style.transition +
                  `, opacity ${duration}ms ${easing} ${delay}ms`
                : `opacity ${duration}ms ${easing} ${delay}ms`;
    }
    if (el.getAttribute("data-motion")?.includes("slide")) {
        const slideFromX = el.getAttribute("data-motion-slide-from-x") || "0";
        const slideFromY = el.getAttribute("data-motion-slide-from-y") || "0";
        const duration = el.getAttribute("data-motion-duration") || "500";
        const easing =
            el.getAttribute("data-motion-slide-easing") || globalEasing;
        const delay = el.getAttribute("data-motion-delay") || "0";

        el.style.transform = `translate(${slideFromX}, ${slideFromY})`;
        el.style.transition =
            el.style.transition.length > 0
                ? el.style.transition +
                  `, transform ${duration}ms ${easing} ${delay}ms`
                : `transform ${duration}ms ${easing} ${delay}ms`;
    }
});

motionElements.forEach((element) => {
    const threshold = element.getAttribute("data-motion-threshold") || "0.5";

    new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((_entry) => {
                const motionType =
                    _entry.target.getAttribute("data-motion") || "";
                let entry = _entry.target as unknown as HTMLElement;

                if (motionType?.includes("fade")) {
                    if (_entry.isIntersecting) {
                        let fadeTo =
                            entry.getAttribute("data-motion-fade-to") || "1";
                        entry.style.opacity = fadeTo;
                    }
                }

                if (motionType?.includes("slide")) {
                    if (_entry.isIntersecting) {
                        let slideToX =
                            entry.getAttribute("data-motion-slide-to-x") || "0";
                        let slideToY =
                            entry.getAttribute("data-motion-slide-to-y") || "0";

                        entry.style.transform = `translate(${slideToX}, ${slideToY})`;
                    }
                }

                if (_entry.isIntersecting) {
                    observer.unobserve(entry);
                }
            });
        },
        {
            threshold: parseFloat(threshold)
        }
    ).observe(element);
});
