import { translations } from '../../../../i18n';

import { FooterProps } from './interface';

export const getScreensButtonsInfo = ({
  onNextScreen,
  onSkip,
  onPreviousScreen,
  screenIndex
}: FooterProps) =>
  [
    {
      firstButton: {
        onPress: onSkip,
        title: translations.SKIP()
      },
      secondButton: {
        onPress: onNextScreen,
        title: translations.NEXT()
      }
    },
    {
      firstButton: {
        onPress: onPreviousScreen,
        title: translations.PREVIOUS()
      },
      secondButton: {
        onPress: onNextScreen,
        title: translations.NEXT()
      }
    },
    {
      firstButton: {
        onPress: onPreviousScreen,
        title: translations.PREVIOUS()
      },
      secondButton: {
        onPress: onSkip,
        title: translations.FINISH()
      }
    }
  ][screenIndex];
