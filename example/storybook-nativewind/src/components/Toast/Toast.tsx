import React from 'react';
import { Icon, CloseIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { Pressable } from '@/components/ui/pressable';
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from '@/components/ui/toast';
import { Button, ButtonText } from '@/components/ui/button';

const ToastFigmaStory = ({ _placement = 'top', _colorMode, ...props }: any) => {
  return (
    <Toast {...props} className="max-w-[500px]">
      <VStack space="xs" className="flex-1">
        <ToastTitle>Hello World Toast</ToastTitle>
        <ToastDescription>
          Please create a support ticket from the support page
        </ToastDescription>
      </VStack>
      <Pressable>
        <Icon as={CloseIcon} />
      </Pressable>
    </Toast>
  );
};

const ToastBasic = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: placement,
          duration: null,
          render: ({ id }) => {
            const toastId = `toast-${id}`;
            return (
              <>
                <Toast nativeID={toastId} {...props}>
                  <ToastTitle>Changes applied successfully!</ToastTitle>

                  <Pressable onPress={() => toast.close(id)}>
                    <Icon as={CloseIcon} />
                  </Pressable>
                </Toast>
              </>
            );
          },
        });
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
};

ToastBasic.description =
  'This is a basic Toast component example. Toasts are used to communicate a state that affects a system, feature or page';

export default ToastBasic;

export { ToastFigmaStory, Toast, ToastTitle, ToastDescription, useToast };
