import { useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Пожалуйста, укажите ваше имя",
  }),
  attendance: z.enum(["yes", "no", "maybe"], {
    required_error: "Пожалуйста, выберите ваш ответ",
  }),
  plusOne: z.boolean().optional(),
  guestsCount: z.string().optional(),
  comment: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const GuestRsvp = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      attendance: undefined,
      plusOne: false,
      guestsCount: "0",
      comment: "",
    },
  });

  const { watch, setValue } = form;
  const attendance = watch("attendance");
  const plusOne = watch("plusOne");

  const onSubmit = (values: FormValues) => {
    console.log(values);
    setSubmitted(true);
    // В реальном проекте здесь был бы API запрос для сохранения ответа
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Card className="bg-slavic-white border-2 border-slavic-red overflow-hidden">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-slavic-red">
              <Checkbox className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slavic-red mb-4">Спасибо за ваш ответ!</h3>
            <p className="text-lg">
              Мы получили информацию о вашем присутствии и с нетерпением ждём встречи на нашей свадьбе.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Card className="bg-slavic-white border-2 border-slavic-red overflow-hidden">
        <CardHeader className="bg-slavic-red text-white">
          <CardTitle className="text-center text-2xl">Подтвердите ваше присутствие</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slavic-red">Ваше имя и фамилия</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван Петров" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attendance"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-slavic-red">Вы придёте на нашу свадьбу?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            Да, с радостью буду
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            К сожалению, не смогу прийти
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="maybe" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            Пока не уверен(а)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {attendance === "yes" && (
                <>
                  <FormField
                    control={form.control}
                    name="plusOne"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => {
                              field.onChange(e.target.checked);
                              if (!e.target.checked) {
                                setValue("guestsCount", "0");
                              } else {
                                setValue("guestsCount", "1");
                              }
                            }}
                            className="h-4 w-4 mt-1 border-slavic-red"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-slavic-red">Я буду с сопровождающими</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  {plusOne && (
                    <FormField
                      control={form.control}
                      name="guestsCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slavic-red">Количество сопровождающих</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </>
              )}

              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slavic-red">Дополнительные пожелания</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Особые диетические предпочтения, пожелания или вопросы..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-slavic-red hover:bg-red-700 text-white">
                Отправить ответ
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuestRsvp;
